import { LUMINETH_REALMLORDS } from 'meta/factions'
import { pickEffects } from '../metatagger'
import Artifacts from './artifacts'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import Scenery from './scenery'
import Spells from './spells'
import Units from './units'

const subFactions = {
  [LUMINETH_REALMLORDS]: {
    effects: pickEffects(BattleTraits, [LUMINETH_REALMLORDS]),
    available: {
      artifacts: [Artifacts],
      battalions: [],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      endless_spells: [EndlessSpells],
      flavors: [Flavors],
      scenery: [Scenery],
      spells: [Spells],
      units: [Units],
    },
  },
}

export default subFactions
