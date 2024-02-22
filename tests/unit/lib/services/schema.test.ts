import { DictionaryEntry } from 'lib/models/dictionary'
import {
  getBreadcrumbsSchema, getDefaultSchema, getLetterSchema, getWordSchema,
} from 'lib/services/schema'

describe('Schema structure tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://old-danish-dictionary.test'

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

  test('Handles "word" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTerm',
        '@id': 'https://old-danish-dictionary.test/word/gronfugl',
        name: 'Old Danish Dictionary - Grønfugl',
        description: 'no. totanus. Moth. Smlgn. grittue.',
        inDefinedTermSet: 'https://old-danish-dictionary.test',
      },
    )

    const result = getWordSchema(words[0])

    expect(result).toEqual(expected)
  })

  test('Handles "letter" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://old-danish-dictionary.test/letter/g',
        name: 'Old Danish Dictionary - Letter G',
        description: 'Old Danish words starting with letter G',
      },
    )

    const result = getLetterSchema(words)

    expect(result).toEqual(expected)
  })

  test('Handles "breadcrumbs" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'First breadcrumb',
            item: 'https://old-danish-dictionary.test/first-link',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Second breadcrumb',
            item: 'https://old-danish-dictionary.test/second-link',
          },
        ],
      },
    )

    const breadcrumbs = [
      {
        label: 'First breadcrumb',
        url: '/first-link',
      },
      {
        label: 'Second breadcrumb',
        url: '/second-link',
      },
    ]
    const result = getBreadcrumbsSchema(breadcrumbs)

    expect(result).toEqual(expected)
  })

  test('Handles "default" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://old-danish-dictionary.test',
        name: 'Old Danish Dictionary',
        description: 'Old Danish words with Danish definitions',
      },
    )

    const result = getDefaultSchema()

    expect(result).toEqual(expected)
  })
})
