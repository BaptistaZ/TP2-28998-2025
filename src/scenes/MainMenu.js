import Phaser from "phaser";
import constants from "../constants";

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.mainMenu });
    }

    create() {
        const { width, height } = this.scale;

        this.add.image(width / 2, height / 2, 'menuBackground').setOrigin(0.5).setDisplaySize(width, height);

        const playButton = this.add.zone(width / 2, height / 2 + 0, 420, 90).setOrigin(0.5).setInteractive();
        const optionsButton = this.add.zone(width / 2, height / 2 + 117, 420, 90).setOrigin(0.5).setInteractive();
        const exitButton = this.add.zone(width / 2, height / 2 + 235, 420, 90).setOrigin(0.5).setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start(constants.scenes.game); 
        });

        optionsButton.on('pointerdown', () => {
            this.scene.start(constants.scenes.options); 
        });

        exitButton.on('pointerdown', () => {
            window.open('', '_self', ''); 
            window.close();
        });

        this.addCursor(playButton);
        this.addCursor(optionsButton);
        this.addCursor(exitButton);
    }

    addCursor(button) {
        button.on('pointerover', () => {
            button.setCursor('pointer');
        });
        button.on('pointerout', () => {
            button.setCursor('default');
        });
    }
}
