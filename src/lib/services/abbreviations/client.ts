import { abbreviate } from 'abbreviatrix'
import { Abbreviation } from './model'

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

export default addAbbreviationsToContent;
