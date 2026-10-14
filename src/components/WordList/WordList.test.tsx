import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import WordList from './index';

const entries = [
  {
    headword: 'Grønfugl',
    definitions: ['no. totanus. Moth. Smlgn. grittue.'],
    slug: 'gronfugl',
  },
  {
    headword: 'Grønfugl 2',
    definitions: ['no. totanus. Moth. Smlgn. grittue.'],
    slug: 'gronfugl',
  },
  {
    headword: 'Grønfugl 3',
    definitions: ['no. totanus. Moth. Smlgn. grittue.'],
    slug: 'gronfugl',
  },
  {
    headword: 'Grønfugl 4',
    definitions: ['no. totanus. Moth. Smlgn. grittue.'],
    slug: 'gronfugl',
  },
];

describe('WordList component', () => {
  test('Does not crash', () => {
    renderToDOM(<WordList words={entries} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(<WordList words={entries} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders correct amount of words', () => {
    const tree = createRenderer(<WordList words={entries} />);
    const { root } = tree;

    expect(root.findAllByType('ul').length).toEqual(1);
    expect(root.findAllByType('li').length).toEqual(4);
  });
});
