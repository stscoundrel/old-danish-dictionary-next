import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import WordLink from './index';

const word = {
  headword: 'afköra',
  partOfSpeech: ['vb'],
  grammaticalAspect: 'v.',
  definitions: [
    ' , vräka. hafwi wald han afköra  GS 43 (1416?). af ty ahren (för areno) han landboen afkörer ib.',
  ],
  alternativeForms: ['-bortdrifva'],
  slug: 'afkora',
};

describe('WordLink component', () => {
  test('Does not crash', () => {
    renderToDOM(<WordLink data={word} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(<WordLink data={word} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Has correct label', () => {
    const tree = createRenderer(<WordLink data={word} />);
    const { root } = tree;

    expect(root.findByType('a').children).toEqual([word.headword]);
  });
});
