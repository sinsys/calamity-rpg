import { Statistic } from 'src/app/game/models/Base';
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
}

export interface CharacterStats {
  hp: Statistic;
  str: Statistic;
  dex: Statistic;
  int: Statistic;
  luck: Statistic;
  mgk: Statistic;
  spd: Statistic;
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
