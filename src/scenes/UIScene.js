import Phaser from "phaser";
import constants from "../constants";

export default class UIScene extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.ui });
    }

    preload() {
        this.escKey = this.input.keyboard.addKey("ESC");
    }

    create() {
        this.isPaused = false;
        this.escKey.on('down', () => {
            if (!this.isPaused) {
                this.scene.pause(constants.scenes.game);
                this.scene.launch(constants.scenes.pauseMenu);
                this.isPaused = true;
            }
        });

        this.events.on('resume', () => {
            this.isPaused = false;
        });

        this.events.on('pause', () => {
            this.isPaused = true;
        });
    }

    update() {
      
    }
}
