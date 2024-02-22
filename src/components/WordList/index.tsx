import WordLink from 'components/WordLink'
import { DictionaryEntry, DictionaryEntryDTO } from 'lib/models/dictionary'
import styles from './WordList.module.scss'

interface WordListProps{
  words: DictionaryEntry[] | DictionaryEntryDTO[]
}

export default function WordList({ words }: WordListProps) {
  return (
    <ul className={styles.list}>
      { words.map((word) => (
        <li key={word.slug}>
          <WordLink data={word} useLowerCase={true} />
        </li>
      )) }
    </ul>
  )
}
