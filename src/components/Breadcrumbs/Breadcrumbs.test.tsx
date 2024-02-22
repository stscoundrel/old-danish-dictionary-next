import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Breadcrumbs from './index'

describe('Breadcrumbs component', () => {
  const word = {
    headword: 'Grønfugl',
    definitions: [
      'no. totanus. Moth. Smlgn. grittue.',
    ],
    slug: 'gronfugl',
  }

  const letter = {
    letter: 'g',
    slug: 'g',
  }

  test('Default page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs word={null} letter={null} />)
  })

  test('Default page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs word={null} letter={null} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Default page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs word={null} letter={null} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(1)
  })

  test('Letter page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs word={null} letter={letter} />)
  })

  test('Letter page: matches snapshot', () => {
    const tree = renderer.create(
      <Breadcrumbs word={null} letter={letter} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Letter page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs word={null} letter={letter} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(2)
  })

  test('Word page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs word={word} letter={letter} />)
  })

  test('Word page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs word={word} letter={letter} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Word page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs word={word} letter={letter} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(3)
  })
})
