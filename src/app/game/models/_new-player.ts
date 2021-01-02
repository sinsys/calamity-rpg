
import { EquipType, ModifierType, StatType } from './Base'
const leatherHelment = {
  name: 'Leather Helmet',
  type: EquipType.HEAD,
  modifiers: [
    {
      statType: StatType.DEX,
      modifierType: ModifierType.COUNT,
      value: 1
    }
  ] 
};
const leatherVest = {
  name: 'Leather Vest',
  type: EquipType.CHEST,
  modifiers: [
    {
      statType: StatType.DEX,
      modifierType: ModifierType.COUNT,
      value: 1
    }
  ] 
};
const leatherPants = {
  name: 'Leather Pants',
  type: EquipType.LEGS,
  modifiers: [
    {
      statType: StatType.DEX,
      modifierType: ModifierType.COUNT,
      value: 1
    }
  ] 
}
const leatherBracers = {
  name: 'Leather Bracers',
  type: EquipType.ARMS,
  modifiers: [
    {
      statType: StatType.DEX,
      modifierType: ModifierType.COUNT,
      value: 1
    }
  ] 
}
const rustySword = {
  name: 'Rusty Sword',
  type: EquipType.WEAPON,
  modifiers: [
    {
      statType: StatType.STR,
      modifierType: ModifierType.COUNT,
      value: 10
    }
  ]
}
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
    head: leatherHelment,
    chest: leatherVest,
    legs: leatherPants,
    arms: leatherBracers,
    relicLeft: null,
    relicRight: null,
    weaponLeft: rustySword,
    weaponRight: null
  },
  lvl: 1,
  experience: 1
}