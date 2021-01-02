
import { EquipType, ModifierType, StatType } from './Base'
import { equipment } from 'src/app/game/models/Equipment'

export default {
  name: 'SinSys',
  stats: {
    hp: 100,
    str: 10,
    dex: 10,
    int: 10,
    luck: 10,
    mgk: 10,
    spd: 10
  },
  equipment: {
    head: equipment.head.leatherHelment,
    chest: equipment.chest.leatherVest,
    legs: equipment.legs.leatherPants,
    arms: equipment.arms.leatherBracers,
    relicLeft: null,
    relicRight: equipment.relic.rabbitsFoot,
    weaponLeft: null,
    weaponRight: equipment.weapon.rustySword
  },
  lvl: 1,
  experience: 1
}