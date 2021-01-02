import { 
  EquipType, 
  ModifierType, 
  StatType,
  StatModifier
} from 'src/app/game/models/Base';

export interface Equipment {
  name: string;
  type: EquipType;
  modifiers: StatModifier[]
}

const headEquipment = {
  leatherHelment: {
    name: 'Leather Helmet',
    description: 'A helmet salvaged from early 1940\'s football',
    shortDesc: '+1 Dex',
    type: EquipType.HEAD,
    modifiers: [
      {
        statType: StatType.DEX,
        modifierType: ModifierType.COUNT,
        value: 1
      }
    ] 
  }
};
const chestEquipment = {
  leatherVest: {
    name: 'Leather Vest',
    description: 'A leather platemail with several broken buckles',
    shortDesc: '+1 Dex',
    type: EquipType.CHEST,
    modifiers: [
      {
        statType: StatType.DEX,
        modifierType: ModifierType.COUNT,
        value: 1
      }
    ] 
  }
};
const legsEquipment = {
  leatherPants: {
    name: 'Leather Pants',
    description: 'A pair of dusty, leather trousers with holes in the knees',
    shortDesc: '+1 Dex',
    type: EquipType.LEGS,
    modifiers: [
      {
        statType: StatType.DEX,
        modifierType: ModifierType.COUNT,
        value: 1
      }
    ] 
  }
};
const armsEquipment = {
  leatherBracers: {
    name: 'Leather Bracers',
    description: 'Flimsy, leather bracers cracking from age',
    shortDesc: '+1 Dex',
    type: EquipType.ARMS,
    modifiers: [
      {
        statType: StatType.DEX,
        modifierType: ModifierType.COUNT,
        value: 1
      }
    ] 
  }
};
const weaponEquipment = {
  rustySword: {
    name: 'Rusty Sword',
    description: 'This sword looks ready to fall apart',
    shortDesc: '+1 Atk',
    type: EquipType.WEAPON,
    modifiers: [
      {
        statType: StatType.STR,
        modifierType: ModifierType.COUNT,
        value: 1
      }
    ]
  }
};
const relicEquipment = {
  rabbitsFoot: {
    name: 'Rabbit\'s foot',
    description: 'An old, tattered foot of a rabbit that is said to increase luck',
    shortDesc: '+10% Luck',
    type: EquipType.RELIC,
    modifiers: [
      {
        statType: StatType.LUCK,
        modifierType: ModifierType.PERC,
        value: 1.1
      }
    ]
  }
};
export const equipment = {
  head: headEquipment,
  chest: chestEquipment,
  legs: legsEquipment,
  arms: armsEquipment,
  weapon: weaponEquipment,
  relic: relicEquipment
};