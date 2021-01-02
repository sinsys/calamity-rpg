export interface StatModifier {
  statType: StatType;
  modifierType: ModifierType;
  value: number;
}

export enum StatType {
  HP = 'hp',
  STR = 'str',
  DEX = 'dex',
  INT = 'int',
  LUCK = 'luck',
  MGK = 'mgk',
  SPD = 'spd'
}

export enum ModifierType {
  PERC = 'perc',
  COUNT = 'count'
}

export enum EquipType {
  HEAD = 'head',
  CHEST = 'chest',
  LEGS = 'legs',
  ARMS = 'arms',
  RELIC = 'relic',
  WEAPON = 'weapon'
}