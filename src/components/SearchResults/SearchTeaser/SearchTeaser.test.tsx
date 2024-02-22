import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import SearchTeaser from './index'

const result = {
  headword: 'afköra',
  partOfSpeech: ['vb'],
  grammaticalAspect: 'v.',
  definitions: [
    ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
  ],
  alternativeForms: ['-bortdrifva'],
  slug: 'afkora',
  foundIn: [' , vräka. hafwi wald han <mark>afköra</mark>  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.'],
}

describe('Search teaser component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SearchTeaser data={result} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SearchTeaser data={result} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<SearchTeaser data={result} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([result.headword])
  })
})
