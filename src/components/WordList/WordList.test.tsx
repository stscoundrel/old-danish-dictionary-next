import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import WordList from './index'

const entries = [
  {
    headword: 'Grønfugl',
    definitions: [
      'no. totanus. Moth. Smlgn. grittue.',
    ],
    slug: 'gronfugl',
  },
  {
    headword: 'Grønfugl 2',
    definitions: [
      'no. totanus. Moth. Smlgn. grittue.',
    ],
    slug: 'gronfugl',
  },
  {
    headword: 'Grønfugl 3',
    definitions: [
      'no. totanus. Moth. Smlgn. grittue.',
    ],
    slug: 'gronfugl',
  },
  {
    headword: 'Grønfugl 4',
    definitions: [
      'no. totanus. Moth. Smlgn. grittue.',
    ],
    slug: 'gronfugl',
  },
]

describe('WordList component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordList words={entries} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordList words={entries} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders correct amount of words', () => {
    const tree = renderer.create(<WordList words={entries} />)
    const { root } = tree

    expect(root.findAllByType('ul').length).toEqual(1)
    expect(root.findAllByType('li').length).toEqual(4)
  })
})
