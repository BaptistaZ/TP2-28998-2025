import Phaser from "phaser";
import constants from "../constants";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.preloader });
    }

    preload() {
        this.load.image("menuBackground", "assets/menubackground.png");
        this.load.image("pauseMenuBackground", "assets/pauseMenuBackground.png");
        this.load.image("gameOverBackground", "assets/gameOverBackground.png");
        this.load.image("optionsBackground", "assets/optionsBackground.png");
        this.load.image("landscape", "assets/landscape-2.png");
        this.load.image("iceIcon", "assets/iceIcon.png");
        this.load.image("ground", "assets/platform.png");
        this.load.spritesheet("Diamante", "assets/Diamante.png", {
            frameWidth: 23,
            frameHeight: 25,
        });
        this.load.spritesheet("enemy", "assets/enemy.png", {
            frameWidth: 29,
            frameHeight: 32,
        });
        this.load.image(constants.textures.uiPanel, "assets/ui-panel-2.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 55,
        });

        this.load.audio('collectSound', 'assets/sounds/collect.mp3');
        this.load.audio('gameOverSound', 'assets/sounds/game-over.mp3');
        this.load.audio('jumpSound', 'assets/sounds/jump.mp3');

        this.loadFont("PressStart2P", "assets/fonts/PressStart2P-Regular.ttf");
    }

    create() {
        // create animations for dude
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "turn",
            frames: [{ key: "dude", frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 5,
                end: 8,
            }),
            frameRate: 8,
            repeat: -1,
        });

        // create animation for Diamante
        this.anims.create({
            key: "rotate",
            frames: this.anims.generateFrameNumbers("Diamante", {
                start: 0,
                end: 7,
            }),
            frameRate: 7, // Aumenta a taxa de quadros para uma rotação mais suave
            repeat: -1,
        });

        // create animations for enemy
        this.anims.create({
            key: "enemyLeft",
            frames: this.anims.generateFrameNumbers("enemy", {
                start: 0,
                end: 3,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.anims.create({
            key: "enemyTurn",
            frames: [{ key: "enemy", frame: 4    }],
            frameRate: 20,
        });

        this.anims.create({
            key: "enemyRight",
            frames: this.anims.generateFrameNumbers("enemy", {
                start: 5,
                end: 8,
            }),
            frameRate: 8,
            repeat: -1,
        });

        // start main menu scene
        this.scene.start(constants.scenes.mainMenu); // Inicia a cena do menu principal
    }

    loadFont(name, url) {
        const newFont = new FontFace(name, `url(${url})`);
        newFont.load().then(function (loadedFace) {
            document.fonts.add(loadedFace);
        }).catch(function (error) {
            console.error(`Failed to load font: ${name}`, error);
        });
    }
}
