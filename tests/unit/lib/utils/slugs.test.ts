import { slugifyLetter, decodeLetter, slugifyWord } from 'lib/utils/slugs'

describe('Slug utils', () => {
  test('Slugifys letters', () => {
    expect(slugifyLetter('ø')).toEqual('oe')
    expect(slugifyLetter('æ')).toEqual('ae')
    expect(slugifyLetter('å')).toEqual('oo')
  })

  test('Slugifys words', () => {
    expect(slugifyWord('äimänkäki')).toEqual('aimankaki')
  })

  test('Decodes letters', () => {
    expect(decodeLetter('oe')).toEqual('ø')
    expect(decodeLetter('ae')).toEqual('æ')
    expect(decodeLetter('oo')).toEqual('å')
    expect(decodeLetter('a')).toEqual('a')
  })
})
