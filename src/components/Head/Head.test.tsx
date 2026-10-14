import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import Head from 'components/Head';
import { getByLetter, getWord } from 'lib/services/dictionary';
import { ContentType } from 'lib/models/content-types';

describe('Head component', () => {
  describe('Letter head', () => {
    test('Does not crash', () => {
      const aWords = getByLetter('a').slice(0, 10);
      renderToDOM(
        <Head
          words={aWords}
          word={null}
          letter={null}
          type={ContentType.Letter}
        />,
      );
    });

    test('Matches snapshot', () => {
      const aWords = getByLetter('a').slice(0, 10);
      const tree = createRenderer(
        <Head
          words={aWords}
          word={null}
          letter={null}
          type={ContentType.Letter}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Word head', () => {
    const word = getWord('abild');

    test('Does not crash', () => {
      renderToDOM(
        <Head word={word} words={[]} letter={null} type={ContentType.Word} />,
      );
    });

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Head word={word} words={[]} letter={null} type={ContentType.Word} />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
