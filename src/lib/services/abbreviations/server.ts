import { findAbbreviations } from 'old-danish-dictionary'
import { OriginalDictionaryEntry } from 'lib/models/dictionary'
import { Abbreviation } from './model'

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

export default getAbbreviations;
