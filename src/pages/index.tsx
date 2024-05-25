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
    </Layout>
  )
}
