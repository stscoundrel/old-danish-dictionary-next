import { getDictionary } from 'old-danish-dictionary'
import {
  getAllWords, getByLetter, getWord, getAlphabet,
  getInitialWordsToBuild,
} from 'lib/services/dictionary'

describe('Dictionary tests', () => {
  const dictionary = getAllWords()
  const originalDictionary = getDictionary()
  test('Dictionary is not identical with original source, as entries have been enrichened.', () => {
    expect(originalDictionary).not.toMatchObject(dictionary)
  })

  test('Enrichened dictionary has equal amount of entries as the original one', () => {
    expect(originalDictionary.length).toBe(getAllWords().length)
  })

  test('Dictionary has added url slugs to source', () => {
    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['headword', 'definitions', 'slug'])
    })
  })

  test('Dictionary slugs are unique', () => {
    const slugs = new Set()

    dictionary.forEach((entry) => {
      slugs.add(entry.slug)
    })

    expect(slugs.size).toEqual(dictionary.length)
  })

  test('Dictionary gets words by letter', () => {
    const aWords = getByLetter('A')
    const bWords = getByLetter('b')
    const oeWords = getByLetter('ø')

    expect(aWords.length).toBe(1043)
    expect(bWords.length).toBe(3052)
    expect(oeWords.length).toBe(423)

    aWords.forEach((entry) => {
      expect(entry.headword.charAt(0).toLowerCase()).toBe('a')
    })

    bWords.forEach((entry) => {
      expect(entry.headword.charAt(0).toLowerCase()).toBe('b')
    })

    oeWords.forEach((entry) => {
      expect(entry.headword.charAt(0).toLowerCase()).toBe('ø')
    })
  })

  test('Dictionary gets individual words by slug', () => {
    const entry1 = getWord('gronfugl')
    const entry2 = getWord('navnkyndighed')
    const entry3 = getWord('vidne(s)brev')

    const expected1 = {
      headword: 'Grønfugl',
      definitions: [
        'no. totanus. Moth. Smlgn. grittue.',
      ],
      slug: 'gronfugl',
    }

    const expected2 = {
      headword: 'Navnkyndighed',
      definitions: [
        'nu. kendskab til personers og tings navne. Moth.\u2014',
      ],
      slug: 'navnkyndighed',
    }

    const expected3 = {
      headword: 'Vidne(s)brev',
      definitions: [
        'o.(fsv vitnisbref) skrift- sligt vidnesbyrd; h\u00e6nge vi varm incigle for\u00e6 thett\u00e6 witnesbreff (1408). DoB 167; uden hand haffuer gode mends widnebreff. Rsv" V. 131. Jf brev 1). \u2014 Vidne(s) [vinde(s)bu[y]rd, no.',
        '1) (isl vitnisburdr) vidnesbyrd; til witnesburd wore indsegle hengde for thette bref (1479). NAM I. 183; hagde ther verit y retthe stefin\u00e5 paa et sand- hets vitnesburdt (1843). Rsv I. 75;40 \u2014 eth pantebreff, som E oc M hagde beseglt met nogre then tiid righens rad til widnesbiurd (1492). Rev I. 29; (1520). Hub X. 120; haffver baaret vidnisbiurd om. HierP p\u00e5-3"; \u2014 (1408). DOB 397 (ovf. 1. 61882); Herr\u00e6n gaff Moysi too witn\u00e6byrdz steentawffl\u00e6. 2 Msb 3118 (\u00c6B; 1550: vidnesbyrdens); Art (v Rerd) 48 (ovf. IV. 808218 = vindis- byrd. Hvf VIII. 218); wort ewyuneligto witnesbyrd. Josva 222 (\u00c6B og flgd. overs.); \u2014 ieg haffuer lyst til dine vidnesbyrde. Ps 1192 (1550; FV: wijtnisbyrdt); \u2014 thill windisbiurdt haffue wy thr\u00f8ct vorre indsegle for thette breff (1474). Rsv I. 13; (1535). Hub I. 129, 182; skiche samme vind- nisbyurdt saa beschrefine. Rsv% IV. 37; vindnisbyrdt. sst. 36; SR I. 142 (ovf. III. 764249); et wryggeligt vindisbyrd om si\u00e6lens vd\u00f8delighed. Lysch 3; \u2014 till ydher mere weshedh och wyndeburdh. Hub 1. 48; \u2014 sw\u00e6r- ielse \u00e6ll\u00e6r edens winn\u00e6byrdh. \u00c6B 1 Msb 493; \u2014 til withingssburth (1456)NaM I. 125; \u2014 till ythermere wit- ningss byrdh (1497). KD 1. 247. Jf videndesb. \u2014 fk.; den gode vidnis- byrd. PIV 6112; min vidnisbyrd hialp till. KhS VIL 800 (fl. g. mit v. sst.), 798 (ovf. u. bagvidne). Hank. i Isl, men s\u00e6dv. ik. i Dsk (se ovf.) i Sv, fk. jydskhed. \u2014',
        '2) vidne; Matt 1816 (1524); ApG 613; \u00c5b 15 (ovf. IV. $13510,19); 5 Msb vTavsen fort 3" (ovf. 2III. 388 D45); bescreffnen aff sande vid- nesbyrde. TAmU d2; uden at presten oc fem andre vidnissbyrd ere offuer- v\u00e6rendis (1582). Rsv" IV. 801; aabne brefve, brefve seigl oc lefvendis vidniss= biurd. RFIL 240. Jf levende r\u00f8st ovf.IU. 656bs4. \u2014 Som samlingsnavn; witnesbyrdet nedlagde klederne boss en vngt menniskes f\u00f8dder. ApG 78 (1524; 1607 og 1647: vidnisbyrdene;OP: de falske vidne). Jf videndesbyrd.',
      ],
      slug: 'vidne(s)brev',
    }

    expect(entry1).toEqual(expected1)
    expect(entry2).toEqual(expected2)
    expect(entry3).toEqual(expected3)
  })

  test('Dictionary gets alphabet constants with slugs', () => {
    const alphabet = getAlphabet()

    const expectedKeys = ['letter', 'slug']

    alphabet.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(expectedKeys)
    })
  })

  test('Returns initial batch of pages to build', () => {
    const wordsToBuild = getInitialWordsToBuild()

    // Correct amount sampled.
    expect(wordsToBuild.length).toEqual(5656)

    // Deterministic entry slugs, roughly spread through dictionary.
    expect(wordsToBuild[0]).toEqual('abbot')
    expect(wordsToBuild[10]).toEqual('adle')
    expect(wordsToBuild[100]).toEqual('arbedslon')
    expect(wordsToBuild[1000]).toEqual('forstokken')
    expect(wordsToBuild[2000]).toEqual('klaptrae')
    expect(wordsToBuild[3000]).toEqual('nege')
    expect(wordsToBuild[4000]).toEqual('slyskenpak')
    expect(wordsToBuild[5000]).toEqual('udugtighed')
    expect(wordsToBuild[5600]).toEqual('aevi')
  })
})
