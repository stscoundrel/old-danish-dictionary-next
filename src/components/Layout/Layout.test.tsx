import ReactDOM from 'react-dom/client'
import Layout from 'components/Layout'
import renderer from 'react-test-renderer'
import { getByLetter, getWord, getAlphabet } from 'lib/services/dictionary'
import { ContentType } from 'lib/models/content-types'

describe('Layout component', () => {
  describe('Letter layout', () => {
    const aWords = getByLetter('a').slice(0, 10)
    const letters = getAlphabet()

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(
        <Layout
          words={aWords}
          word={null}
          type={ContentType.Letter}
          letters={letters}
          letter={letters[0]}
        >
          <p>Content</p>
        </Layout>,
      )
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(
        <Layout
          words={aWords}
          word={null}
          type={ContentType.Letter}
          letters={letters}
          letter={letters[0]}
        >
          <p>Content</p>
        </Layout>,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word layout', () => {
    const word = getWord('abild')
    const letters = getAlphabet()

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(
        <Layout
          words={[]}
          word={word}
          type={ContentType.Word}
          letters={letters}
          letter={null}
        >
          <p>Content</p>
        </Layout>,
      )
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(
        <Layout
          words={[]}
          word={word}
          type={ContentType.Word}
          letters={letters}
          letter={null}
        >
          <p>Content</p>
        </Layout>,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
