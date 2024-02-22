import { getAllWords, getAlphabet } from 'lib/services/dictionary'
import { getWordLink, getLetterLink } from 'lib/utils/links'
import { SitemapStream, streamToPromise } from 'sitemap'

export interface SitemapEntry {
  url: string,
  changefreq: string,
  priority: number
}

const formatWords = (words): SitemapEntry[] => words.map((word) => ({
  url: getWordLink(word),
  changefreq: 'monthly',
  priority: 0.8,
}))

const formatLetters = (letters): SitemapEntry[] => letters.map((letter) => ({
  url: getLetterLink(letter),
  changefreq: 'monthly',
  priority: 0.5,
}))

const formatSitemap = (content: SitemapEntry[]) => {
  const stream = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_SITE_URL })
  content.forEach((entry) => stream.write(entry))
  stream.end()

  return streamToPromise(stream).then((data) => data.toString())
}

const getSitemapEntries = (): SitemapEntry[] => {
  const words = formatWords(getAllWords())
  const letters = formatLetters(getAlphabet())

  return [...words, ...letters]
}

export const createSitemap = (): Promise<string> => formatSitemap(getSitemapEntries())
