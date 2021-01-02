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

  readStats () {
    const stats = { ...this.stats };
    for (let equip in this.equipment) {
      this.equipment[equip].modifiers.forEach(modifier => {
        stats[modifier.]
      })
    }
    return compiledStats;
  }
}

export enum Stat {
  HP = 'HP',
  STR = 'STR',
  DEX = 'DEX',
  INT = 'INT',
  LUCK = 'LUCK',
  MGK = 'MGK',
  SPD = 'SPD'
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
  relics: {
    one?: Equipment;
    two?: Equipment;
  }
  weapons: {
    one?: Equipment;
    two?: Equipment;
  }
}
