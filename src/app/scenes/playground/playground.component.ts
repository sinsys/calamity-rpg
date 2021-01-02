import { Component, OnInit } from '@angular/core';
import Character from 'src/app/game/models/Character'
import NP from 'src/app/game/models/_new-player'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  character: Character;

  constructor() { }

  ngOnInit(): void {
    this.character = this.createNewPlayer();
  }

  createNewPlayer (): Character {
    const newPlayer = { ...NP };
    return new Character(
      newPlayer.stats,
      newPlayer.equipment,
      newPlayer.lvl,
      newPlayer.experience
    );
  }

}
