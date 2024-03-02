import {
  DictionaryEntry,
} from 'lib/models/dictionary'
import {
  getCrossLinks,
} from 'lib/services/crosslinks'

// Entry which does not produce crosslink matches.
const entry1: DictionaryEntry = {
  headword: 'Grønfugl',
  definitions: [
    'no. totanus. Moth. Smlgn. grittue.',
  ],
  slug: 'gronfugl',
}

// Dummy entry which produces crosslinks
const entry2: DictionaryEntry = {
  headword: '',
  definitions: [],
  slug: 'dag',

}

describe('Crosslinks service tests', () => {
  test('Returns empty list when no crosslinks results', () => {
    const result = getCrossLinks(entry1)
    expect(result.length).toEqual(0)
  })

  test('Returns crosslinks when slugs match', () => {
    const expected = [
      {
        url: 'https://old-swedish-dictionary.vercel.app/word/dag',
        source: 'old-swedish',
      },
    ]

    const result = getCrossLinks(entry2)
    expect(result).toEqual(expected)
  })
})
