import { Component, OnInit } from '@angular/core';
import Character, { CharacterStats } from 'src/app/game/models/Character'
import NP from 'src/app/game/models/_new-player'

@Component({
  selector: 'app-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.scss']
})
export class StatPanelComponent implements OnInit {
  character: Character;
  stats: CharacterStats;

  constructor() { }

  ngOnInit(): void {
    this.character = this.createNewPlayer();
    this.stats = this.character.getStats();
    const equipment = this.character.readEquipment();
  }

  createNewPlayer (): Character {
    const newPlayer = { ...NP };
    return new Character(
      newPlayer.name,
      newPlayer.stats,
      newPlayer.equipment,
      newPlayer.lvl,
      newPlayer.experience
    );
  }
}
