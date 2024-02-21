import { getBreadcrumbs } from 'lib/utils/breadcrumbs'

describe('Breadcrumb utils', () => {
  test('Formats breadcrumbs for frontpage', () => {
    const expected = [
      {
        label: 'Old Danish Dictionary',
        url: '/',
      },
    ]

    const input = {
      letter: null,
      word: null,
    }

    const result = getBreadcrumbs(input)

    expect(result).toEqual(expected)
  })

  test('Formats breadcrumbs for a letter page', () => {
    const expected = [
      {
        label: 'Old Danish Dictionary',
        url: '/',
      },
      {
        label: 'Letter Æ',
        url: '/letter/ae',
      },
    ]

    const input = {
      letter: 'æ',
      word: null,
    }

    const result = getBreadcrumbs(input)

    expect(result).toEqual(expected)
  })

  test('Formats breadcrumbs for a word page', () => {
    const expected = [
      {
        label: 'Old Danish Dictionary',
        url: '/',
      },
      {
        label: 'Letter Æ',
        url: '/letter/ae',
      },
      {
        label: 'Ædelkorn',
        url: '/word/aedelkorn',
      },
    ]

    const input = {
      letter: 'Æ',
      word: 'Ædelkorn',
    }

    const result = getBreadcrumbs(input)

    expect(result).toEqual(expected)
  })
})
