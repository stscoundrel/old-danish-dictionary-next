import { DictionaryEntry } from 'lib/models/dictionary'
import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { Crosslink, DictionarySource } from 'scandinavian-dictionary-crosslinker'
import WordDefinition from './index'

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

const crosslinks: Crosslink[] = [
  {
    url: 'https://old-swedish-dictionary.vercel.app/word/dag',
    source: DictionarySource.OldSwedish,
  },
]

describe('WordDefinition component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(
      <WordDefinition
        entry={entry}
        abbreviations={abbreviations}
        similarEntries={[entry]}
        crosslinks={crosslinks}
      />,
    )
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <WordDefinition
        entry={entry}
        similarEntries={[entry]}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct title', () => {
    const tree = renderer.create(
      <WordDefinition
        entry={entry}
        similarEntries={[entry]}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    )
    const { root } = tree

    expect(root.findByType('h1').children).toEqual(['Abe'])
  })
})
