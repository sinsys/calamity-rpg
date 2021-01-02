
import { EquipType, ModifierType, StatType } from './Base'

export default {
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
    head: {
      name: 'Leather Helmet',
      type: EquipType.HEAD,
      modifiers: [
        {
          attr: StatType.DEX,
          type: ModifierType.COUNT,
          value: 1
        }
      ] 
    },
    chest: {
      name: 'Leather Vest',
      type: EquipType.CHEST,
      modifiers: [
        {
          attr: StatType.DEX,
          type: ModifierType.COUNT,
          value: 1
        }
      ] 
    },
    legs: {
      name: 'Leather Pants',
      type: EquipType.LEGS,
      modifiers: [
        {
          attr: StatType.DEX,
          type: ModifierType.COUNT,
          value: 1
        }
      ] 
    },
    arms: {
      name: 'Leather Braces',
      type: EquipType.ARMS,
      modifiers: [
        {
          attr: StatType.DEX,
          type: ModifierType.COUNT,
          value: 1
        }
      ] 
    },
    relics: {
      one: null,
      two: null
    },
    weapons: {
      left: {
        name: 'Rusty Sword',
        type: EquipType.WEAPON,
        modifiers: [
          {
            attr: StatType.STR,
            type: ModifierType.COUNT,
            value: 10
          }
        ]
      },
      right: null,
      both: null
    }
  },
  lvl: 1,
  experience: 1
}