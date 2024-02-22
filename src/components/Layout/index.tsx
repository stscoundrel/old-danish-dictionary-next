// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'
import Breadcrumbs from 'components/Breadcrumbs'
import Navigation from 'components/Navigation'
import BackToTop from 'components/BackToTop'
import { ContentType } from 'lib/models/content-types'
import { DictionaryEntry, DictionaryEntryDTO } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'

interface LayoutProps{
  type: ContentType,
  word: DictionaryEntry | null,
  words: DictionaryEntry[] | DictionaryEntryDTO[],
  letters: AlphabetLetter[],
  letter: AlphabetLetter | null,
  children: JSX.Element | JSX.Element[],
}

export default function Layout({
  type, letters, word = null, words = [], children, letter = null,
}: LayoutProps) {
  return (
    <>
      <Head type={type} word={word} words={words} letter={letter} />
      <header>
        <Navigation letters={letters} />
        <Breadcrumbs word={word} letter={letter} />
      </header>
      <main className="container">
        {children}
        <BackToTop />
      </main>
      <Footer letters={letters}/>
    </>
  )
}
