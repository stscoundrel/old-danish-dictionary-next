import { slugifyLetter, slugifyWord } from 'lib/utils/slugs'
import { capitalize } from 'lib/utils/strings'

export interface Breadcrumb{
    label: string,
    url: string,
}

export interface BreadcrumbRequest{
    word?: string | null,
    letter?: string | null
}

const getFrontpage = () => ({
  label: 'Old Danish Dictionary',
  url: '/',
})

const getLetter = (letter: string) => ({
  label: `Letter ${letter.toUpperCase()}`,
  url: `/letter/${slugifyLetter(letter)}`,
})

const getWord = (word: string) => ({
  label: capitalize(word),
  url: `/word/${slugifyWord(word)}`,
})

export const getBreadcrumbs = (request: BreadcrumbRequest) => {
  const { word, letter } = request

  const breadcrumbs = [getFrontpage()]

  if (letter) {
    breadcrumbs.push(getLetter(letter))
  }

  if (word) {
    breadcrumbs.push(getWord(word))
  }

  return breadcrumbs
}

export default getBreadcrumbs
