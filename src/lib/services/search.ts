import { markWords } from 'markari'
import { DictionaryEntry } from 'lib/models/dictionary'

export interface SearchResult {
  headword: string,
  slug: string,
  foundIn: string[],
}

export type Criteria = 'headword' | 'definitions'

const formatResults = (
  results: DictionaryEntry[],
  search: string,
  criteria: Criteria[],
): SearchResult[] => {
  const formattedResults = results.map((result) => {
    const foundIn: string[] = []

    if (criteria.includes('definitions')) {
      result.definitions.forEach((definition) => {
        if (definition.toLowerCase().includes(search.toLowerCase())) {
          foundIn.push(markWords(search, definition))
        }
      })
    }

    if (foundIn.length === 0) {
      const highlightedHeadword = markWords(search, result.headword)
      foundIn.push(`In headword: ${highlightedHeadword}`)
    }

    return {
      headword: result.headword,
      slug: result.slug,
      foundIn,
    }
  })

  return formattedResults
}

export const searchDictionary = (
  search: string,
  dictionary: DictionaryEntry[],
  criteria: Criteria[] = ['headword', 'definitions'],
): SearchResult[] => {
  const filteredSearch = search.toLowerCase()

  const results = dictionary.filter((entry) => {
    let matchesSearch = false

    if (criteria.includes('headword')) {
      if (entry.headword.toLowerCase().includes(filteredSearch)) {
        matchesSearch = true
      }

      if (entry.slug.includes(filteredSearch)) {
        matchesSearch = true
      }
    }

    if (criteria.includes('definitions')) {
      entry.definitions.forEach((definition) => {
        if (definition.toLowerCase().includes(filteredSearch)) {
          matchesSearch = true
        }
      })
    }

    return matchesSearch
  })

  const formattedResult = formatResults(results, search, criteria)

  return formattedResult
}

export default searchDictionary
