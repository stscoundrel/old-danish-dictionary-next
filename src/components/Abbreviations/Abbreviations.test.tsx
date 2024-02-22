import React from 'react'
import renderer from 'react-test-renderer'
import Abbreviations from './index'

describe('Abbreviations component', () => {
  const abbreviations = [
    { abbreviation: 'isl.', explanation: 'islandsk.' },
    { abbreviation: 'n.', explanation: 'norsk.' },
    { abbreviation: 'no.', explanation: 'navneord (substantivum).' },
    { abbreviation: 'æ.', explanation: 'ældre.' },
  ]

  test('Matches the snapshot', () => {
    const tree = renderer.create(
      <Abbreviations abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
