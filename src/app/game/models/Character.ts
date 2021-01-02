import { EquipType, StatType, StatModifier } from 'src/app/game/models/Base';
import { Equipment } from 'src/app/game/models/Equipment';

export default class Character {
  stats: CharacterStats;
  equipment: CharacterEquipment;
  lvl: number;
  experience: number;

  constructor (
    stats,
    equipment,
    lvl,
    experience
  ) {
    this.stats = stats;
    this.equipment = equipment;
    this.lvl = lvl;
    this.experience = experience;
  }

  changeEquipment (type: EquipType, equipment: Equipment): void {
    this.equipment[type] = equipment;
  }

  increaseStat (statistic: StatType, modifier: StatModifier): void {
    this.stats[statistic] += 1;
  }

  readStats (): CharacterStats {
    const stats = { ...this.stats };
    const equipment = Object.keys(this.equipment).filter(equipment => this.equipment[equipment] != null);
    equipment.forEach(piece => {
      this.equipment[piece].modifiers.forEach(modifier => {
        switch (modifier.modifierType) {
          case 'count': stats[modifier.statType] += modifier.value;
            break;
          case 'perc': stats[modifier.statType] *= modifier.value;
            break;
        }
      });
    });
    return stats;
  }

  readBaseStats (): CharacterStats {
    return this.stats;
  }

  readEquipment () {
    return this.equipment;
  }
}

export enum Stat {
  HP = 'hp',
  STR = 'str',
  DEX = 'dex',
  INT = 'int',
  LUCK = 'luck',
  MGK = 'mgk',
  SPD = 'spd'
}

export interface CharacterStats {
  hp: number;
  str: number;
  dex: number;
  int: number;
  luck: number;
  mgk: number;
  spd: number;
}

export interface CharacterEquipment {
  head?: Equipment;
  chest?: Equipment;
  legs?: Equipment;
  arms?: Equipment;
  relicLeft?: Equipment;
  reliceRight?: Equipment;
  weaponLeft?: Equipment;
  weaponRight?: Equipment;
}
