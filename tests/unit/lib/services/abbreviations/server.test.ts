import {
  getAbbreviations,
} from 'lib/services/abbreviations/server'

describe('Abbreviations server tests', () => {
  const entry = {
    headword: 'Abild',
    definitions: [
      'no. (isl. apaldr.) \u00e6bletr\u00e6; then frucht, som paa then abildh\u00e6 staar. Hr. Michael. 134; malus, abild eller ebletr\u00e6. Vocab. 1514; tree ymper abbele, perer eller andre gode tr\u00e6r (1587). Rosenv., Gl L. IV. 186 = Chr. V. D. L. 3-18-18; fruet- tr\u00e6er, som abile, p\u00e6rer. A. Bernt-sen. I. 309.',
    ],
    slug: 'abild',
  }

  test('Abbreviations have expected content', () => {
    const result = getAbbreviations(entry)

    const expected = [
      { abbreviation: 'isl.', explanation: 'islandsk.' },
      { abbreviation: 'n.', explanation: 'norsk.' },
      { abbreviation: 'no.', explanation: 'navneord (substantivum).' },
      { abbreviation: 'æ.', explanation: 'ældre.' },
    ]

    expect(result).toEqual(expected)
  })
})
