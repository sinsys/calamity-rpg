import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

import { MainScene } from './scenes/Main';

@Component({
  selector: 'app-game-engine',
  templateUrl: './game.engine.html',
  styleUrls: ['./game.engine.scss']
})

export class GameEngine implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 1200,
      width: 1200,
      scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        fullscreenTarget: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: [ MainScene ],
      parent: 'gameEngine',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
