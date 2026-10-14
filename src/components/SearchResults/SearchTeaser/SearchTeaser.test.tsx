import { createRenderer, renderToDOM } from '../../../../tests/helpers/react';
import SearchTeaser from './index';

const result = {
  headword: 'afköra',
  partOfSpeech: ['vb'],
  grammaticalAspect: 'v.',
  definitions: [
    ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
  ],
  alternativeForms: ['-bortdrifva'],
  slug: 'afkora',
  foundIn: [
    ' , vräka. hafwi wald han <mark>afköra</mark>  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
  ],
};

describe('Search teaser component', () => {
  test('Does not crash', () => {
    renderToDOM(<SearchTeaser data={result} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(<SearchTeaser data={result} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Has correct label', () => {
    const tree = createRenderer(<SearchTeaser data={result} />);
    const { root } = tree;

    expect(root.findByType('a').children).toEqual([result.headword]);
  });
});
