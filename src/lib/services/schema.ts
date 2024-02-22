import { capitalize } from 'lib/utils/strings'
import { slugifyLetter } from 'lib/utils/slugs'
import { getWordLink, getLetterLink } from 'lib/utils/links'
import { DictionaryEntry, DictionaryEntryDTO } from 'lib/models/dictionary'
import { Breadcrumb } from 'lib/utils/breadcrumbs'

interface SchemaListItem {
  '@type': string,
  position: number
  name: string,
  item: string,
}

interface SchemaDefinition {
  '@context': string,
  '@type': string,
  '@id'?: string,
  name?: string,
  description?: string,
  itemListElement?: SchemaListItem[],
  inDefinedTermSet?: string,
}

const getDefinedTermSetData = (
  content: DictionaryEntry[] | DictionaryEntryDTO[],
): SchemaDefinition => {
  const letter = {
    letter: content[0].headword.charAt(0),
    slug: slugifyLetter(content[0].headword.charAt(0)),
  }

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': getLetterLink(letter),
    name: `Old Danish Dictionary - Letter ${letter.letter.toUpperCase()}`,
    description: `Old Danish words starting with letter ${letter.letter.toUpperCase()}`,
  }
}

const getDefinedTermData = (content: DictionaryEntry): SchemaDefinition => ({
  '@context': 'https://schema.org/',
  '@type': 'DefinedTerm',
  '@id': getWordLink(content),
  name: `Old Danish Dictionary - ${capitalize(content.headword)}`,
  description: content.definitions[0],
  inDefinedTermSet: process.env.NEXT_PUBLIC_SITE_URL,
})

const getBreadcrumbListData = (content: Breadcrumb[]): SchemaDefinition => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const listItems: SchemaListItem[] = content.map(({ label, url }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: label,
    item: siteUrl + url,
  }))

  return {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  }
}

const getDefault = (): SchemaDefinition => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': `${siteUrl}`,
    name: 'Old Danish Dictionary',
    description: 'Old Danish words with Danish definitions',
  }
}

export const getWordSchema = (entry: DictionaryEntry): string => {
  const schema = getDefinedTermData(entry)
  return JSON.stringify(schema)
}

export const getLetterSchema = (entries: DictionaryEntry[] | DictionaryEntryDTO[]): string => {
  const schema = getDefinedTermSetData(entries)
  return JSON.stringify(schema)
}

export const getBreadcrumbsSchema = (breadcrumbs: Breadcrumb[]): string => {
  const schema = getBreadcrumbListData(breadcrumbs)
  return JSON.stringify(schema)
}

export const getDefaultSchema = (): string => {
  const schema = getDefault()
  return JSON.stringify(schema)
}
