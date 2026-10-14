import { createRenderer } from '../../../tests/helpers/react';
import { DictionaryEntry } from 'lib/models/dictionary';
import SimilarEntries from './index';

describe('Similar entries component', () => {
  const entries: DictionaryEntry[] = [
    {
      headword: 'Abe',
      definitions: [],
      slug: 'abe',
    },
  ];

  test('Matches the snapshot', () => {
    const tree = createRenderer(<SimilarEntries entries={entries} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
