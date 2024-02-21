import { DictionaryEntry as RawDictionaryEntry } from 'old-danish-dictionary'

export type OriginalDictionaryEntry = RawDictionaryEntry

export interface DictionaryEntry extends RawDictionaryEntry {
    slug: string,
}

// Light weight alternative when definitions are not needed.
// Next.js caches all props as JSON, so no need to store megabytes of definitions when not used.
export interface DictionaryEntryDTO {
  headword: string,
  slug: string
}
