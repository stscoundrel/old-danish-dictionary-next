import ExternalLink from 'components/ExternalLink'
import LetterLink from 'components/LetterLink'
import ContentArea from 'components/ContentArea'
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './Footer.module.scss'

interface FooterProps{
  letters: AlphabetLetter[]
}

export default function Footer({ letters }: FooterProps) {
  return (
    <footer className={styles.section}>
      <div className="container">

        <ContentArea>
          <h2>About</h2>
          <p>Based on &quot;Ordbog til det ældre danske Sprog&quot; by Otto Kalkar.</p>
          <p>It is the largest Old Danish dictionary.
            The original volumes were published in 1881 - 1907, with additional supplement
            added in 1907 - 1918.</p>
        </ContentArea>

        <ContentArea>
          <h3 className='h4'>Old Danish language</h3>
          <p>
            Old Swedish developed from Old East Norse, the eastern dialect of Old Norse,
            at the end of the Viking Age.
          </p>

          <p>
            Despite its name, Kalkars dictionary is not exactly a dictionary of
            &quot;Old Danish&quot;,as it covers period from Middle Danish to early Modern Danish.
            The dictionary covers time period of 1300 - 1700, which means the oldest vocabulary
            would not differ much from that used in the Viking Age, while the newest portions
            would not differ much from modern Danish.
          </p>
        </ContentArea>

        <ContentArea>
          <h4>Old Norse language</h4>
          <p>Old Norse was a North Germanic language that was spoken by inhabitants of
          Scandinavia and their overseas settlements from about the 7th to the 15th centuries.</p>

          <p>Also known as &quot;the viking language&quot;,
          &quot;Old Nordic&quot;, or
          &quot;Old Scandinavian&quot;</p>
        </ContentArea>

        <div className={styles.navs}>
          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Dictionary project</h4>
            <ul>
              <li>
                <ExternalLink
                  title="Source code"
                  href="https://github.com/stscoundrel/old-danish-dictionary-next"
                />
              </li>
              <li>
                <ExternalLink
                  title="Data source"
                  href="https://github.com/stscoundrel/old-danish-dictionary"
                />
              </li>
              <li>
                <ExternalLink
                  title="Data source builder"
                  href="https://github.com/stscoundrel/old-danish-dictionary-builder"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Related dictionary projects</h4>
            <ul>
            <li>
                <ExternalLink
                  title="K.F Söderwall's Old Swedish Dictionary"
                  href="https://old-swedish-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="Dictionary of the Old Norwegian Language"
                  href="https://old-norwegian-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="Cleasby and Vigfusson Old Norse Dictionary"
                  href="https://cleasby-vigfusson-dictionary.vercel.app/"
                />
              </li>
              <li>
                <ExternalLink
                  title="A Concise Dictionary of Old Icelandic"
                  href="https://old-icelandic.vercel.app/"
                />
              </li>
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Quick links</h4>
            <ul className={styles.navColumns}>
              {letters.map((entry) => (
                <li className={styles.navColumnItem} key={entry.slug}>
                  <LetterLink letter={entry} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <small className={styles.copyright}>{`Copyright © 2024 - ${new Date().getFullYear()}`}
          <br />
          <ExternalLink
            title="Sampo Silvennoinen / StScoundrel"
            href="https://github.com/stscoundrel"
          />
        </small>
      </div>
    </footer>
  )
}
