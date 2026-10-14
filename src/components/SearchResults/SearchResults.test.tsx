import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import SearchResults from './index';

const words = [
  {
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
  },
  {
    headword: 'afköra 2',
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
  },
  {
    headword: 'afköra 3',
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
  },
];

describe('SearchResults component', () => {
  test('Does not crash', () => {
    renderToDOM(<SearchResults words={words} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(<SearchResults words={words} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
