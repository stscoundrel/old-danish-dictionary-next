import { getWordLink, getLetterLink, getMainUrl } from 'lib/utils/links'

describe('Link utils', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://old-danish-dictionary.test'

  const word = {
    headword: 'Grønfugl',
    definitions: [
      'no. totanus. Moth. Smlgn. grittue.',
    ],
    slug: 'gronfugl',
  }

  const letter = {
    letter: 'æ',
    slug: 'ae',
  }

  test('Formats word links', () => {
    const expected = 'https://old-danish-dictionary.test/word/gronfugl'

    const result = getWordLink(word)

    expect(result).toEqual(expected)
  })

  test('Formats letter links', () => {
    const expected = 'https://old-danish-dictionary.test/letter/ae'

    const result = getLetterLink(letter)

    expect(result).toEqual(expected)
  })

  test('Gets frontpage link', () => {
    const expected = process.env.NEXT_PUBLIC_SITE_URL
    const result = getMainUrl()

    expect(result).toEqual(expected)
  })
})
