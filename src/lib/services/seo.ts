import { joinWithConj } from 'teljari'
import { capitalize } from 'lib/utils/strings'
import { DictionaryEntry, DictionaryEntryDTO } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'

export interface SEO {
  title: string,
  description: string
}

export const getLetterSEO = (
  alphabetLetter: AlphabetLetter,
  content: DictionaryEntry[] | DictionaryEntryDTO[],
): SEO => {
  const firstWords = content.slice(0, 4).map((entry) => entry.headword.toLowerCase())
  return {
    title: `Old Danish words starting with letter ${alphabetLetter.letter.toUpperCase()}`,
    description: `Meanings of Old Danish words starting with "${firstWords[0].charAt(0).toUpperCase()}", such as ${joinWithConj(firstWords)}`,
  }
}

export const getWordSEO = (word: DictionaryEntry): SEO => ({
  title: `Old Danish Dictionary - ${capitalize(word.headword)}`,
  description: `Meaning of Old Danish word "${word.headword.toLowerCase()}" in Danish`,
})

export const getDefaultSEO = () : SEO => ({
  title: 'Old Danish Dictionary - Otto Kalkar',
  description: '45 000+ words and definitions for old, middle and early modern danish.',
})
