import { getDictionary } from 'old-danish-dictionary'
import { slugifyWord, slugifyLetter } from '../utils/slugs'
import type { OriginalDictionaryEntry, DictionaryEntry, DictionaryEntryDTO } from '../models/dictionary'

let cachedDictionary: DictionaryEntry[] | null = null
let cachedInitialPages: string[] | null = null

export interface AlphabetLetter {
  letter: string,
  slug: string,
}

const addSlugs = (words: OriginalDictionaryEntry[]): DictionaryEntry[] => {
  const existingSlugs = {}

  const formattedWords = words.map((word) => {
    let slug = slugifyWord(word.headword).toLowerCase()

    if (existingSlugs[slug]) {
      // Double slug, make unique.
      existingSlugs[slug] += 1
      slug = `${slug}-${existingSlugs[slug]}`
    } else {
      existingSlugs[slug] = 1
    }

    return {
      ...word,
      slug,
    }
  })

  return formattedWords
}

export const getAllWords = (): DictionaryEntry[] => {
  if (cachedDictionary) return cachedDictionary

  const words = getDictionary()

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words)

  cachedDictionary = formattedWords

  return formattedWords
}

export const getByLetter = (letter: string): DictionaryEntryDTO[] => {
  const words = getAllWords()
  const byLetter = words
    .filter((entry) => (
      entry.headword.charAt(0).toLowerCase() === letter.toLowerCase()))
    .map((entry) => ({ headword: entry.headword, slug: entry.slug }))

  return byLetter
}

export const getWord = (word: string): DictionaryEntry => (
  getAllWords().filter((entry) => entry.slug === word)[0]
)

export const getSimilarWords = (entry: DictionaryEntry): DictionaryEntry[] => getAllWords()
  .filter((dEntry) => dEntry.headword === entry.headword && dEntry.slug !== entry.slug)

export const getAlphabet = (): AlphabetLetter[] => {
  // Outputted from dictionary src with scripts/output-alphabet.js
  const letters = [
    'a',
    'b',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'r',
    's',
    't',
    'u',
    'v',
    'x',
    'y',
    'æ',
    'ø',
  ]

  const formattedLetters = letters.map((letter) => ({
    letter,
    slug: slugifyLetter(letter),
  }))

  return formattedLetters
}

/**
 * Initial word pages to build are basically 6000
 * headword pages based on modulus. Larger number
 * can not be deployed in one go.
 */
export const getInitialWordsToBuild = (): string[] => {
  if (cachedInitialPages) return cachedInitialPages
  const allWords = getAllWords()
  const result: string[] = []
  for (let i = 0; i < allWords.length; i += 8) {
    result.push(allWords[i].slug);
  }
  cachedInitialPages = result
  return cachedInitialPages
}
