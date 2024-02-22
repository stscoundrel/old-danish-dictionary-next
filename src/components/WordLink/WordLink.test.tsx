import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import WordLink from './index'

const word = {
  headword: 'afköra',
  partOfSpeech: ['vb'],
  grammaticalAspect: 'v.',
  definitions: [
    ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
  ],
  alternativeForms: ['-bortdrifva'],
  slug: 'afkora',
}

describe('WordLink component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordLink data={word} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordLink data={word} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(<WordLink data={word} />)
    const { root } = tree

    expect(root.findByType('a').children).toEqual([word.headword])
  })
})
