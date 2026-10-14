import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import Layout from 'components/Layout';
import { getByLetter, getWord, getAlphabet } from 'lib/services/dictionary';
import { ContentType } from 'lib/models/content-types';

describe('Layout component', () => {
  describe('Letter layout', () => {
    const aWords = getByLetter('a').slice(0, 10);
    const letters = getAlphabet();

    test('Does not crash', () => {
      renderToDOM(
        <Layout
          words={aWords}
          word={null}
          type={ContentType.Letter}
          letters={letters}
          letter={letters[0]}
        >
          <p>Content</p>
        </Layout>,
      );
    });

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Layout
          words={aWords}
          word={null}
          type={ContentType.Letter}
          letters={letters}
          letter={letters[0]}
        >
          <p>Content</p>
        </Layout>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Word layout', () => {
    const word = getWord('abild');
    const letters = getAlphabet();

    test('Does not crash', () => {
      renderToDOM(
        <Layout
          words={[]}
          word={word}
          type={ContentType.Word}
          letters={letters}
          letter={null}
        >
          <p>Content</p>
        </Layout>,
      );
    });

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Layout
          words={[]}
          word={word}
          type={ContentType.Word}
          letters={letters}
          letter={null}
        >
          <p>Content</p>
        </Layout>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
