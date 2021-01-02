import { Component, OnInit } from '@angular/core';
import Character from 'src/app/game/models/Character'
import { EquipmentType } from 'src/app/game/models/Equipment';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  character;

  constructor() { }

  ngOnInit(): void {
    this.character = this.createNewPlayer();
    console.log(this.character);
  }

  createNewPlayer (): Character {
    const defaultStat = { value: 10, modifier: 1 };
    const defaultEquipStats = {
      val: 10,
      effect: null
    }

    const newPlayer = {
      stats: {
        hp: {
          value: 100,
          modifier: 1
        },
        str: defaultStat,
        dex: defaultStat,
        int: defaultStat,
        luck: defaultStat,
        mgk: defaultStat,
        spd: defaultStat,
      },
      equipment: {
        head: {
          name: 'Leather Helmet',
          type: EquipmentType.Head,
          stats: { ...defaultEquipStats }
        },
        chest: {
          name: 'Leather Vest',
          type: EquipmentType.Chest,
          stats: { ...defaultEquipStats }
        },
        legs: {
          name: 'Leather Pants',
          type: EquipmentType.Legs,
          stats: { ...defaultEquipStats }
        },
        arms: {
          name: 'Leather Braces',
          type: EquipmentType.Arms,
          stats: { ...defaultEquipStats }
        },
        relics: {
          one: null,
          two: null
        },
        weapons: {
          left: {
            name: 'Rusty Sword',
            type: EquipmentType.Weapon,
            stats: { ...defaultEquipStats }
          },
          right: null,
          both: null
        }
      },
      lvl: 1,
      experience: 1
    }
    return new Character(
      newPlayer.stats,
      newPlayer.equipment,
      newPlayer.lvl,
      newPlayer.experience
    );
  }

}
