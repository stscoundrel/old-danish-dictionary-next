import { findAbbreviations } from 'old-danish-dictionary'
import { abbreviate } from 'abbreviatrix'
import { OriginalDictionaryEntry } from 'lib/models/dictionary'

export interface Abbreviation{
    abbreviation: string,
    explanation: string
}

export const getAbbreviations = ({ definitions }: OriginalDictionaryEntry): Abbreviation[] => {
  const combinedAbbreviations: Abbreviation[] = []
  const abbreviationSet = new Set()

  definitions.forEach((definition) => {
    const abbreviations = findAbbreviations(definition)
    abbreviations.forEach((explanation, abbreviation) => {
      if (!abbreviationSet.has(abbreviation)) {
        abbreviationSet.add(abbreviation)
        combinedAbbreviations.push({ abbreviation, explanation })
      }
    })
  })

  return combinedAbbreviations;
}

/**
 * Add abbr tags to content with explanations.
 */
export const addAbbreviationsToContent = (
  content: string,
  abbreviations: Abbreviation[],
): string => {
  let result = content

  abbreviations.forEach(({ abbreviation, explanation }) => {
    result = abbreviate(abbreviation, explanation, result)
  })

  return result
}
