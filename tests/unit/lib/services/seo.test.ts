import { getDefaultSEO, getLetterSEO, getWordSEO } from 'lib/services/seo'
import { DictionaryEntry } from 'lib/models/dictionary'

describe('SEO / meta tags tests', () => {
  const words: DictionaryEntry[] = [
    {
      headword: 'Grønfugl',
      definitions: [
        'no. totanus. Moth. Smlgn. grittue.',
      ],
      slug: 'gronfugl',
    },
    {
      headword: 'Grønfugl 2',
      definitions: [
        'no. totanus. Moth. Smlgn. grittue.',
      ],
      slug: 'gronfugl',
    },
    {
      headword: 'Grønfugl 3',
      definitions: [
        'no. totanus. Moth. Smlgn. grittue.',
      ],
      slug: 'gronfugl',
    },
    {
      headword: 'Grønfugl 4',
      definitions: [
        'no. totanus. Moth. Smlgn. grittue.',
      ],
      slug: 'gronfugl',
    },
  ]

  test('Handles "word" seo fields', () => {
    const expected = {
      title: 'Old Danish Dictionary - Grønfugl',
      description: 'Meaning of Old Danish word "grønfugl" in Danish',
    }

    const result = getWordSEO(words[0])

    expect(result).toEqual(expected)
  })

  test('Handles "letter" seo fields', () => {
    const expected = {
      title: 'Old Danish words starting with letter G',
      description: 'Meanings of Old Danish words starting with "G", such as grønfugl, grønfugl 2, grønfugl 3 and grønfugl 4',
    }
    const letter = {
      letter: 'g',
      slug: 'g',
    }
    const result = getLetterSEO(letter, words)

    expect(result).toEqual(expected)
  })

  test('Handles default response', () => {
    const expected = {
      title: 'Old Danish Dictionary - Otto Kalkar',
      description: '45 000+ words and definitions for old, middle and early modern danish.',
    }

    const result = getDefaultSEO()

    expect(result).toEqual(expected)
  })
})
