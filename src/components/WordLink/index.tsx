import { DictionaryEntry, DictionaryEntryDTO } from 'lib/models/dictionary'
import Link from 'next/link'
import styles from './WordLink.module.scss'

interface WordLinkProps{
  data: DictionaryEntry | DictionaryEntryDTO,
  useLowerCase: boolean,
}

export default function WordLink({ data: { slug, headword }, useLowerCase = true }: WordLinkProps) {
  return (
   <Link key={`link${slug}`} href={`/word/${slug}`} className={styles.link}>
      {useLowerCase ? headword.toLowerCase() : headword}
    </Link>
  )
}
