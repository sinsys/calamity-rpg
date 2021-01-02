export interface StatModifier {
  attr: StatType;
  type: ModifierType;
  value: number;
}

export enum StatType {
  HP = 'HP',
  STR = 'STR',
  DEX = 'DEX',
  INT = 'INT',
  LUCK = 'LUCK',
  MGK = 'MGK',
  SPD = 'SPD'
}

export enum ModifierType {
  PERC = 'perc',
  COUNT = 'count'
}

export enum EquipType {
  HEAD = 'Head',
  CHEST = 'Chest',
  LEGS = 'Legs',
  ARMS = 'Arms',
  RELIC = 'Relic',
  WEAPON = 'Weapon'
}