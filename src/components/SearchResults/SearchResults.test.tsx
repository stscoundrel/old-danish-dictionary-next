import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import SearchResults from './index'

const words = [
  {
    headword: 'afköra',
    partOfSpeech: ['vb'],
    grammaticalAspect: 'v.',
    definitions: [
      ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
    ],
    alternativeForms: ['-bortdrifva'],
    slug: 'afkora',
    foundIn: [' , vräka. hafwi wald han <mark>afköra</mark>  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.'],
  },
  {
    headword: 'afköra 2',
    partOfSpeech: ['vb'],
    grammaticalAspect: 'v.',
    definitions: [
      ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
    ],
    alternativeForms: ['-bortdrifva'],
    slug: 'afkora',
    foundIn: [' , vräka. hafwi wald han <mark>afköra</mark>  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.'],
  },
  {
    headword: 'afköra 3',
    partOfSpeech: ['vb'],
    grammaticalAspect: 'v.',
    definitions: [
      ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
    ],
    alternativeForms: ['-bortdrifva'],
    slug: 'afkora',
    foundIn: [' , vräka. hafwi wald han <mark>afköra</mark>  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.'],
  },
]

describe('SearchResults component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SearchResults words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SearchResults words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
