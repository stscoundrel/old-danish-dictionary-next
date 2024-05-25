// Services.
import { getAlphabet, AlphabetLetter } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import { ContentType } from 'lib/models/content-types'
import Link from 'next/link'
import SampleText from 'components/SampleText'

interface IndexProps{
  letters: AlphabetLetter[]
}

export async function getStaticProps() {
  const letters = getAlphabet()

  return {
    props: {
      letters,
    },
  }
}

export default function Index({ letters }: IndexProps) {
  return (
    <Layout letters={letters} letter={null} type={ContentType.Page} word={null} words={[]}>
       <ContentArea>
        <h1 className="h2">Old Danish Dictionary</h1>
        <p>Online version of the &quot;<em>Ordbog til det ældre danske Sprog</em>&quot;,
        the dictionary of Old Danish by Otto Kalkar.</p>

        <p>The dictionary contains over 45 000 translations
          from Old Danish to Danish. This is the largest dictionary of the language.</p>

        <Link href="/search" className="button" prefetch={false}>
          Search the dictionary
        </Link>
      </ContentArea>

      <ContentArea>
        <h2 className="h3">What is Old Danish?</h2>
        <p>
          Old Danish was a language spoken in Denmark from year 800 to 1525.
          It represents the middle stages between Old East Norse (language of the Vikings)
          and modern Danish.
        </p>
        <p>
          Old Danish can further be divided into:
        </p>
          <ul>
            <li>- Runic Danish 800 - 1100 (olddansk in Danish)</li>
            <li>
                - Early Middle Danish 1100 - 1350 <em>(yngre gammeldansk/middeldansk in Danish)</em>
            </li>
            <li>
                - Late Middle Danish 1350 - 1525 <em>(ældre gammeldansk/middeldansk in Danish)</em>
            </li>
            </ul>
      </ContentArea>

      <ContentArea>
        <SampleText />
      </ContentArea>

      <ContentArea>
        <h2 className="h4">Written language of the dictionary</h2>
        <p>The dictionary was published in the late 1800&apos;s, making the language
          of the definitions quite old fashioned for readers of modern Danish.
          The definitions generally also contain quotes from older dictionaries, so the
          language can be an exotic mixture of medieval and modern Danish.
        </p>
      </ContentArea>

      <ContentArea>
        <h3 className="h5">Did you find a mistake?</h3>
        <p>
          This dictionary has been machine generated, which means there are many mistakes.
          It is based on scans and photos of a quite large book from the 19th century.
          This means only a fraction of the OCR (image to text) output has been proofread.
        </p>
        <p>
          The quality will be improved in small increments. If some pages seem completely wrong,
          you can open an issue in Github. Links is in the footer for website & data source.
        </p>
      </ContentArea>
    </Layout>
  )
}
