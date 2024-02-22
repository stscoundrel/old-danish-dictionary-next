import { capitalize } from 'lib/utils/strings'
import { lettersToRunes } from 'futhork'
import { DictionaryEntry } from 'lib/models/dictionary'
import { addAbbreviationsToContent } from 'lib/services/abbreviations/client'
import Abbreviations from 'components/Abbreviations'
import SimilarEntries from 'components/SimilarEntries'
import { Abbreviation } from 'lib/services/abbreviations/model'
import styles from './WordDefinition.module.scss'

interface WordDefinitionProps{
  entry: DictionaryEntry,
  similarEntries: DictionaryEntry[],
  abbreviations: Abbreviation[],
}

export default function WordDefinition({
  entry, similarEntries, abbreviations,
}: WordDefinitionProps) {
  const {
    headword, definitions,
  } = entry

  return (
    <article className={styles.section}>
      <header>
        <h1 lang="non">{capitalize(headword)}</h1>

        <small className={styles.subHeading}>
          Old Danish Dictionary - {headword.toLowerCase()}
        </small>
        <p>Meaning of Old Danish word <em>&quot;{headword}&quot;</em>,
        as defined by Otto Kalkar&apos;s Dictionary of Old Danish language.</p>
      </header>

      <p>The Old Danish word <strong><dfn className="capitalize">{headword}</dfn></strong> can mean:</p>
      <ul className={styles.definitionList}>
      {definitions.map((definition, index) => (
          <li
            key={`definition-${index}`}
            className={styles.definitionItem}
            lang="swe"
            dangerouslySetInnerHTML={{
              __html: addAbbreviationsToContent(definition, abbreviations),
            } }
          />
      ))}
      </ul>

      <p>Possible runic inscription in <em>Medieval Futhork</em>:
        <span className={styles.rune}>{ lettersToRunes(headword) }</span><br />
      <small>Medieval Runes were used in Denmark from 12th to 17th centuries.</small>
      </p>

      <SimilarEntries entries={similarEntries} />
      <Abbreviations abbreviations={abbreviations} />
    </article>
  )
}
