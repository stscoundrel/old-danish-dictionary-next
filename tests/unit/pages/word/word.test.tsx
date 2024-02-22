import ReactDOM from 'react-dom/client'
import Word, { getStaticProps, getStaticPaths } from 'pages/word/[word]'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'
import { DictionaryEntry } from 'lib/models/dictionary'

const mockHandler = jest.fn()

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: undefined,
      defaultLocale: undefined,
      asPath: '/test',
      back: mockHandler,
    }
  },
}))

const entry: DictionaryEntry = {
  headword: 'Abe',
  definitions: [
    'no.',
    "1) dyrenavn, hunk. (cv sv. apa.); som aben tit skeer, naar hun vil gøre effter det, hun seer. Herm. ' Weigere. 215, 228%; lige som man ick kunde aben kende, naar hun sig før i Aarons klæder. Ranch. 29; løb løss en tam abe, der mand lockede ad hende. Hvitf VIL 1; aben, som bilder sig ind, at hendis børn er altijd de smuckeste. S. Terkelsen, Astreæ Sjungek. IL. fort. —",
    '2) fjfr. isl. api.) dåre; wthen han seer ther tijl ful- breth, tha holles han forenabe., Rimkr. p%; giør du Joab, Herre, til din abe, at hans anslag ey due. Ranch. 95; en nar, den, som holder for- meget af sine børn. Moth.',
  ],
  slug: 'abe',
}

const abbreviations = [
  { abbreviation: 'no.', explanation: 'navneord (substantivum).' },
  { abbreviation: 'hunk.', explanation: 'hunkøn (femininum).' },
  { abbreviation: 'sv.', explanation: 'svensk.' },
  { abbreviation: 't.', explanation: 'tysk.' },
  { abbreviation: 'isl.', explanation: 'islandsk.' },
  { abbreviation: 'n.', explanation: 'norsk.' },
]

const letter = {
  letter: 'a',
  slug: 'a',
}

describe('Word page: render & usage', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(
      <Word
        entry={entry}
        similarEntries={[]}
        letters={getAlphabet()}
        letter={letter}
        abbreviations={abbreviations}
      />,
    )
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <Word
        entry={entry}
        similarEntries={[]}
        letters={getAlphabet()}
        letter={letter}
        abbreviations={abbreviations}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Returns null if entry is unavailable', () => {
    const tree = renderer.create(
      <Word
        entry={null}
        similarEntries={[]}
        letters={getAlphabet()}
        letter={letter}
        abbreviations={abbreviations}
      />,
    ).toJSON()
    expect(tree).toBeNull()
  })

  test('Back button works', async () => {
    const tree = renderer.create(
      <Word
      entry={entry}
      similarEntries={[]}
      letters={getAlphabet()}
      letter={letter}
      abbreviations={abbreviations}
    />,
    )

    // Click back btn.
    await renderer.act(async () => {
      expect(mockHandler).not.toHaveBeenCalled()
      await tree.root.findByProps({ text: 'Back' }).props.action()

      // Assert mockrouter received a push.
      expect(mockHandler).toHaveBeenCalled()
      expect(mockHandler.mock.calls.length).toBe(1);
    })
  })
})

describe('Word page: data fetching', () => {
  test('getStaticPaths works', async () => {
    const expected = {
      paths: [],
      fallback: 'blocking',
    }

    const result = await getStaticPaths()

    expect(result).toMatchObject(expected)
  })

  test('getStaticProps works', async () => {
    const expected = {
      props: {
        entry,
        similarEntries: [
          {
            headword: 'Abe',
            definitions: [
              'go.',
              "1) skabe sig (efter); somdet papistiske folok haffuer nock abet sig. Pallad., S. Ped. Skib. r4'; nu grøn, nu blaa, mu sort for herre- gunst sig aber. Hexaem. 243; abe sig efter alle dyr med munden. Grev. 0. Frih. K. 50. —",
              '2) narre, spotte; naar hand haffuer dig behoft, da kand han smucht abe dig. Jes. Sir. 13.7 (Luth. åffen); huad haffue i voss her atabe. Herm, Weigere. 255; paa det sidste aff lycken abit oc bedaarit. Hvitf. VIL 1; har han stillet sig,som hand nødig vilde komme oc abet dennem med dette giensvar. Bruns- mand, Huus-Kaars. 1757. 74; smlen. Sch. u. L.: apen og affen.',
            ],
            slug: 'abe-2',
          },
        ],
        letters: getAlphabet(),
        letter,
        abbreviations,
      },
    }

    const result = await getStaticProps({ params: { word: 'abe' } })

    expect(result).toEqual(expected)
  })

  test('getStaticProps returns 404 redirect for unkown words', async () => {
    const expected = {
      props: {},
      notFound: true,
    }

    const result = await getStaticProps({ params: { word: 'loremipsum' } })

    expect(result).toEqual(expected)
  })
})
