import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import Breadcrumbs from './index';

describe('Breadcrumbs component', () => {
  const word = {
    headword: 'Grønfugl',
    definitions: ['no. totanus. Moth. Smlgn. grittue.'],
    slug: 'gronfugl',
  };

  const letter = {
    letter: 'g',
    slug: 'g',
  };

  test('Default page: does not crach', () => {
    renderToDOM(<Breadcrumbs word={null} letter={null} />);
  });

  test('Default page: matches snapshot', () => {
    const tree = createRenderer(
      <Breadcrumbs word={null} letter={null} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Default page: renders correct amount of breadcrumbs', () => {
    const tree = createRenderer(<Breadcrumbs word={null} letter={null} />);
    const { root } = tree;

    expect(root.findAllByType('a').length).toEqual(1);
  });

  test('Letter page: does not crach', () => {
    renderToDOM(<Breadcrumbs word={null} letter={letter} />);
  });

  test('Letter page: matches snapshot', () => {
    const tree = createRenderer(
      <Breadcrumbs word={null} letter={letter} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Letter page: renders correct amount of breadcrumbs', () => {
    const tree = createRenderer(<Breadcrumbs word={null} letter={letter} />);
    const { root } = tree;

    expect(root.findAllByType('a').length).toEqual(2);
  });

  test('Word page: does not crach', () => {
    renderToDOM(<Breadcrumbs word={word} letter={letter} />);
  });

  test('Word page: matches snapshot', () => {
    const tree = createRenderer(
      <Breadcrumbs word={word} letter={letter} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Word page: renders correct amount of breadcrumbs', () => {
    const tree = createRenderer(<Breadcrumbs word={word} letter={letter} />);
    const { root } = tree;

    expect(root.findAllByType('a').length).toEqual(3);
  });
});
