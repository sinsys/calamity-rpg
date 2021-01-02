export interface Equipment {
  name: string;
  type: EquipmentType;
  stats: EquipmentStats;
}

export interface EquipmentStats {
  val: number;
  effect: any;
}

export enum EquipmentType {
  Head = 'Head',
  Chest = 'Chest',
  Legs = 'Legs',
  Arms = 'Arms',
  Relic = 'Relic',
  Weapon = 'Weapon'
}