import { EquipType, StatModifier } from 'src/app/game/models/Base';

export interface Equipment {
  name: string;
  type: EquipType;
  modifiers: StatModifier[]
}
