import { getDictionary } from 'old-danish-dictionary'

function main() {
  const dictionary = getDictionary()
  const firstLetters = new Set()

  dictionary.forEach((dictionaryEntry) => {
    firstLetters.add(dictionaryEntry.headword.charAt(0).toLocaleLowerCase())
  })

  console.log(firstLetters)
}

main()

export {}