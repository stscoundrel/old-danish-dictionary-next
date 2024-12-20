import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Components.
import Hamburger from 'components/Hamburger'
import LetterLink from 'components/LetterLink'
import SearchBar from 'components/SearchBar'

// Styles.
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './Navigation.module.scss'

interface NavigationProps{
  letters: AlphabetLetter[],
}

export default function Navigation({ letters }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openNav = () => {
    setIsOpen(!isOpen)
  }

  const getOpenClass = () => (isOpen ? styles.opened : null)

  return (
    <>
      <div className={styles.topBarSpacer}></div>
      <nav className={styles.section}>
        <div className={`${styles.topbar} container`}>
          <Link href="/" passHref prefetch={false}>
            <Image src="/favicon-48x48.png" width="30" height="30" alt="To home" />
          </Link>
          <Hamburger action={openNav} />
        </div>
        <div className={`${styles.content} ${getOpenClass()} container`}>
          <ul className={styles.list}>
            {letters.map((entry) => (
              <li className={styles.listItem} key={entry.slug}>
                <LetterLink letter={entry} />
              </li>
            ))}
          </ul>
          <SearchBar />
        </div>
      </nav>
    </>
  )
}
