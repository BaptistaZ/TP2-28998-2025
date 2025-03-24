import Phaser from "phaser";
import constants from "../constants";

export default class Options extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.options });
    }

    create() {
        const { width, height } = this.scale;

        // imagem de fundo do menu de opções
        this.add.image(width / 2, height / 2, 'optionsBackground').setOrigin(0.5).setDisplaySize(width, height);

        // botões
        const muteButtonZone = this.add.zone(width / 2, height / 2 - 10, 300, 90).setOrigin(0.5).setInteractive();
        const unmuteButtonZone = this.add.zone(width / 2, height / 2 + 140, 300, 90).setOrigin(0.5).setInteractive();
        const menuButtonZone = this.add.zone(width / 2, height / 2 + 290, 300, 90).setOrigin(0.5).setInteractive();

     

        muteButtonZone.on('pointerdown', () => {
            this.sound.mute = true;
        });

        unmuteButtonZone.on('pointerdown', () => {
            this.sound.mute = false;
        });

        menuButtonZone.on('pointerdown', () => {
            this.scene.start(constants.scenes.mainMenu);
        });

        // Adicionar cursor para os botões
        this.addCursor(muteButtonZone);
        this.addCursor(unmuteButtonZone);
        this.addCursor(menuButtonZone);
    }

    addCursor(zone) {
        zone.on('pointerover', () => {
            zone.setCursor('pointer');
        });
        zone.on('pointerout', () => {
            zone.setCursor('default');
        });
    }
}
