import ReactDOM from 'react-dom/client'
import Head from 'components/Head'
import renderer from 'react-test-renderer'
import { getByLetter, getWord } from 'lib/services/dictionary'
import { ContentType } from 'lib/models/content-types'

describe('Head component', () => {
  describe('Letter head', () => {
    test('Does not crash', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Head words={aWords} word={null} letter={null} type={ContentType.Letter} />)
    })

    test('Matches snapshot', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const tree = renderer.create(
        <Head words={aWords} word={null} letter={null} type={ContentType.Letter} />,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word head', () => {
    const word = getWord('abild')

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Head word={word} words={[]} letter={null} type={ContentType.Letter} />)
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(
        <Head word={word} words={[]} letter={null} type={ContentType.Word} />,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
