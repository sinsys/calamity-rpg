import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  platforms;
  player;
  cursors;

  constructor() {
    super({ key: 'main' });
  }

  create() {
    // Background
    this.add.image(600, 600, 'sky').setScale(1.5, 2);

    // Platforms
    this.platforms = this.physics.add.staticGroup();
    const platforms = this.platforms;
    platforms.create(100, 350, 'ground');
    platforms.create(750, 550, 'ground');
    platforms.create(250, 800, 'ground');
    platforms.create(600, 1200, 'ground').setScale(3).refreshBody();

    // Player
    this.player = this.physics.add.sprite(100, 450, 'dude');
    const player = this.player;
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);

    // Physics
    this.physics.add.collider(this.player, this.platforms);

    // Animations
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }

  preload() {
    // Load assets
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
  }

  update() {
    // Events
    this.cursors = this.input.keyboard.createCursorKeys();
    const cursors = this.cursors;
    const player = this.player;
    if (cursors.left.isDown) {
      player.setVelocityX(-260);
      player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(260);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }
    
    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-550);
    }

    // Mouse
    const pointer = this.input.activePointer;
    if (pointer.isDown) {
      if (pointer.worldX < (this.cameras.main.centerX / 2)) {
        player.setVelocityX(-260);
        player.anims.play('left', true);
      } else {
        player.setVelocityX(260);
        player.anims.play('right', true);
      }
    }

    if (pointer.isDown && player.body.touching.down) {
      player.setVelocityY(-550);
    }    

  }
}