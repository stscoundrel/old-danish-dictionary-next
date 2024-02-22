import { getAllWords } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

describe('Search tests', () => {
  const dictionary = getAllWords()

  test('Finds results from descriptions', () => {
    const result = searchDictionary('Jøsningh', dictionary)

    const expected = {
      headword: 'Afløsning',
      slug: 'aflosning',
      foundIn: ["no. = afløsen 1); pauen sende hannem aff- <mark>Jøsningh</mark> for then eed, som hand suoret hagde. Chr. Pedersen. V. 441.32; maatte suerge oc loffae det aldrig at kefine, tog affløsning aff paffue Hen- rico, Lyschand. 226; mit: blod, ther vigiutes skall til affløsningh aff syndæ. Hell. Kvinder. 13.26; den hellig graff, aff huilchen ieg affløsning aff min synnder kand faa. Ludus de sto. Kanuto. v.122; D. Skuesp. 45; Pallad. S. Ped. Skib. k5'; (1517) D. Mag. IV. 276; Chr. Pe- dersen. II. 412; Tavsen. 79; Ve- del, Saxo. 235; ellers bhjelper eders scriftemaal slet inte, i taare ey heller afløsning vente. Herm. Weigere. 63; under affløsning oc sacramenterens meddelelse. Jersin, Mirakler. hØ; aftosning som skriftemaal. P. Syv. I. 20; Chr. V.D. L. 2-7-5."],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from headword', () => {
    const result = searchDictionary('abe', dictionary, ['headword'])

    const expected = {
      headword: 'Abe',
      slug: 'abe',
      foundIn: ['In headword: <mark>abe</mark>'],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from slug', () => {
    // This query should only match slug due to Æ decoding.
    const result = searchDictionary('aedelkamel', dictionary)

    const expected = {
      headword: 'Ædelkamel',
      slug: 'aedelkamel',
      foundIn: ['In headword: Ædelkamel'],
    }

    expect(result[0]).toEqual(expected)
  })
})
