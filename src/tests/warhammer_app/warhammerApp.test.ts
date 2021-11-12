import { readFileSync } from 'fs'
import { MEGA_GARGANT_MERCENARIES, SERAPHON, SKAVEN } from 'meta/factions'
import path from 'path'
import { getWarhammerAppArmy } from 'utils/warhammer_app/getWarhammerAppArmy'

const getFile = (filename: string): string => {
  return readFileSync(path.resolve(`src/tests/fixtures/warhammer_app/${filename}.txt`), 'utf8')
}

describe('getWarhammerAppArmy', () => {
  it('should correctly read 1635442222774-Warhammer_App', () => {
    const parsedText = getFile('1635442222774-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.command_traits).toContain('Acidic Blood (Drakeblood Curse)')
  })

  it('should correctly read 1636660420710-Warhammer_App', () => {
    const parsedText = getFile('1636660420710-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain('Corpse Cart w/ Balefire Brazier')
    expect(res.selections.units).toContain('Corpse Cart w/ Unholy Lodestone')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1636715973222-Warhammer_App', () => {
    const parsedText = getFile('1636715973222-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain("Xandire's Truthseekers")
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1634283728135-Warhammer_App', () => {
    const parsedText = getFile('1634283728135-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.allySelections).toEqual({
      [MEGA_GARGANT_MERCENARIES]: {
        battalions: [],
        units: ['Big Drogg Fort-Kicka - Gatebreaker', 'One-Eyed Grunnock - Warstomper'],
      },
    })
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1634935501696-Warhammer_App', () => {
    const parsedText = getFile('1634935501696-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain('Tzaangor Enlightened')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1634984507089-Warhammer_App', () => {
    const parsedText = getFile('1634984507089-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.prayers).toContain('Blood Sacrifice')
    expect(res.selections.prayers).toContain('Resanguination')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1635118370422-Warhammer_App', () => {
    const parsedText = getFile('1635118370422-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.mount_traits).toContain('Nullblood Construct (Cursed Mutation)')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1633516730420-Warhammer_App', () => {
    const parsedText = getFile('1633516730420-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.allyUnits).toEqual(['Hammerers', 'Warden King']) // Coalition Allies
    expect(res.errors).toEqual([
      {
        text: 'Allied Hammerers can belong to Cities Of Sigmar or Dispossessed. Please add this unit manually.',
        severity: 'ally-warn',
      },
      {
        text: 'Allied Warden King can belong to Cities Of Sigmar or Dispossessed. Please add this unit manually.',
        severity: 'ally-warn',
      },
    ])
  })

  it('should correctly read 1633519072073-Warhammer_App', () => {
    const parsedText = getFile('1633519072073-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.flavors).toContain('The Cult of a Thousand Eyes')
  })

  it('should correctly read 1632565338858-Warhammer_App', () => {
    const parsedText = getFile('1632565338858-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.flavors).toContain('Fuethan')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632626188332-Warhammer_App', () => {
    const parsedText = getFile('1632626188332-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.command_traits).toContain('Mighty War Leader')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632643609934-Warhammer_App', () => {
    const parsedText = getFile('1632643609934-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.allySelections).toEqual({
      [MEGA_GARGANT_MERCENARIES]: { battalions: [], units: ['One-Eyed Grunnock - Warstomper'] },
    })
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632785290009-Warhammer_App', () => {
    const parsedText = getFile('1632785290009-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.artifacts).toContain('The Ulfuri')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1633021235077-Warhammer_App', () => {
    const parsedText = getFile('1633021235077-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.flavors).toContain('The Blessed Sons')
    expect(res.errors).toEqual([
      {
        severity: 'ally-warn',
        text: 'Allied Chaos Knights can belong to Khorne or Slaanesh or Slaves To Darkness or Tzeentch. Please add this unit manually.',
      },
    ])
  })

  it('should correctly read 1633294316295-Warhammer_App', () => {
    const parsedText = getFile('1633294316295-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.artifacts).toContain('Magnificent Omniscope (Great Endrinwork)')
    expect(res.selections.artifacts).toContain("Coalbeard's Collapsible Compartments (Great Endrinwork)")
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1631975360793-Warhammer_App', () => {
    const parsedText = getFile('1631975360793-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.flavors).toContain('The Munificent Wanderers')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1631976215041-Warhammer_App', () => {
    const parsedText = getFile('1631976215041-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain('Kurnoth Hunters')
    expect(res.errors).toEqual([])
  })

  // This shouldn't work, it's actually a Warscroll Builder list
  it('should correctly read 1631987356655-Warhammer_App', () => {
    const parsedText = getFile('1631987356655-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.errors).toEqual([
      {
        severity: 'error',
        text: 'There was a problem parsing this text. Please try copy + pasting it again from the Warhammer App.',
      },
    ])
  })

  it('should correctly read 1632017726597-Warhammer_App', () => {
    const parsedText = getFile('1632017726597-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.command_traits).toContain('Shepherd of Idiotic Destruction')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632029233553-Warhammer_App', () => {
    const parsedText = getFile('1632029233553-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain('Kurnoth Hunters')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632069915266-Warhammer_App', () => {
    const parsedText = getFile('1632069915266-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.artifacts).toContain('Amulet of Silvered Sigmarite')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632078223244-Warhammer_App', () => {
    const parsedText = getFile('1632078223244-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.factionName).toEqual(SKAVEN)
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632087431639-Warhammer_App', () => {
    const parsedText = getFile('1632087431639-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.flavors).toContain('Dhom-Hain')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632089083030-Warhammer_App', () => {
    const parsedText = getFile('1632089083030-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain('Daemon Prince')
    expect(res.errors).toEqual([])
  })

  it('should correctly read 1632120973397-Warhammer_App', () => {
    const parsedText = getFile('1632120973397-Warhammer_App')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.battalions).toContain('Redemption Brotherhood')
    expect(res.errors).toEqual([])
  })

  it('should correctly read Seraphon1', () => {
    const parsedText = getFile('Seraphon1')
    const res = getWarhammerAppArmy(parsedText)

    expect(res).toEqual({
      allyFactionNames: [],
      allySelections: {},
      allyUnits: [],
      errors: [],
      factionName: SERAPHON,
      origin_realm: null,
      realmscape_feature: null,
      realmscape: null,
      selections: {
        artifacts: ['Amulet of Destiny', 'Serpent God Dagger'],
        battalions: ['Battle Regiment', 'Command Entourage', 'Hunters of the Heartlands'],
        command_abilities: ['Parting Shot', 'Supreme Gift from the Heavens', 'Herald of the Old Ones'],
        command_traits: ['Old and Grizzled'],
        core_rules: [],
        endless_spells: ['Soulsnare Shackles', 'The Burning Head'],
        flavors: ['Fangs of Sotek'],
        grand_strategies: ['Prized Sorcery'],
        mount_traits: [],
        prayers: ['Heal'],
        scenery: ['Realmshaper Engine'],
        spells: [
          'Tide of Serpents',
          'Hand of Glory',
          'Celestial Apotheosis',
          'Celestial Deliverance',
          'Celestial Equilibrium',
          'Drain Magic',
          'Mystical Unforging',
          'Stellar Tempest',
          'Walk Between Realms',
          "Comet's Call",
          'Blazing Starlight',
        ],
        triumphs: ['Inspired'],
        units: [
          'Razordon Hunting Pack',
          'Lord Kroak',
          'Saurus Astrolith Bearer',
          'Saurus Guard',
          'Skink Oracle on Troglodon',
          'Skink Priest',
          'Skink Starpriest',
          'Skinks',
          'Chameleon Skinks',
        ],
      },
      subFactionName: 'Starborne',
      unknownSelections: [],
    })
    expect(res.errors).toEqual([])
  })

  it('should correctly read Fyreslayers1', () => {
    const parsedText = getFile('Fyreslayers1')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.errors).toEqual([
      {
        severity: 'ally-warn',
        text: 'Allied Warden King can belong to Cities Of Sigmar or Dispossessed. Please add this unit manually.',
      },
    ])
  })

  it('should correctly read Seraphon2', () => {
    const parsedText = getFile('Seraphon2')
    const res = getWarhammerAppArmy(parsedText)
    expect(res.selections.units).toContain('Bastiladon')
    expect(res.errors).toEqual([])
  })
})