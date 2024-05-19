import { BreadcrumbRequest, getBreadcrumbs } from 'lib/utils/breadcrumbs'
import { getBreadcrumbsSchema } from 'lib/services/schema'
import Link from 'next/link'
import { DictionaryEntry } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './Breadcrumbs.module.scss'

interface BreadcrumbProps{
  word: DictionaryEntry | null,
  letter: AlphabetLetter | null
}

export default function Breadcrumbs({ word, letter }: BreadcrumbProps) {
  const getBreadCrumbsRequest = (): BreadcrumbRequest => {
    const request: BreadcrumbRequest = {
      word: null,
      letter: null,
    }

    if (word) {
      request.word = word.headword
    }

    if (letter) {
      request.letter = letter.letter
    }

    return request
  }

  const breadcrumbs = getBreadcrumbs(getBreadCrumbsRequest())
  const schema = getBreadcrumbsSchema(breadcrumbs)

  return (
    <nav className={styles.section}>
      <div className="container">
        {breadcrumbs.map(({ label, url }) => (
          <Link key={url} href={url} className={styles.link} prefetch={false}>
            {label}
          </Link>
        ))}

        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: schema } }/>
      </div>
    </nav>
  )
}
