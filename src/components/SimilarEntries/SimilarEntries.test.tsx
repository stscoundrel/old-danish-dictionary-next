import { DictionaryEntry } from 'lib/models/dictionary'
import renderer from 'react-test-renderer'
import SimilarEntries from './index'

describe('Similar entries component', () => {
  const entries: DictionaryEntry[] = [
    {
      headword: 'Abe',
      definitions: [],
      slug: 'abe',
    },
  ]

  test('Matches the snapshot', () => {
    const tree = renderer.create(
      <SimilarEntries entries={entries} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
