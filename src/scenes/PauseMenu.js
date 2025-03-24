import Phaser from "phaser";
import constants from "../constants";

export default class PauseMenu extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.pauseMenu });
    }

    create() {
        const { width, height } = this.scale;

        const backgroundOverlay = this.add.graphics();
        backgroundOverlay.fillStyle(0x000000, 0.85); // Cor preta com 80% de opacidade
        backgroundOverlay.fillRect(0, 0, width, height);


        //imagem de fundo do menu de pausa e redimensionar a imagem
        const background = this.add.image(width / 2, height / 2, 'pauseMenuBackground').setOrigin(0.5).setScale(0.7);

        // Ajustar coordenadas e tamanhos das zonas interativas com base na imagem redimensionada
        const continueButton = this.add.zone(width / 2 + 86, height / 2 + 40, 150, 170).setOrigin(0.5).setInteractive();
        const quitButton = this.add.zone(width / 2 - 68, height / 2 + 40, 146, 170).setOrigin(0.5).setInteractive();

        continueButton.on('pointerdown', () => {
            this.scene.resume(constants.scenes.game);
            this.scene.stop();
            this.scene.resume(constants.scenes.ui);
        });

        quitButton.on('pointerdown', () => {
            this.scene.stop(constants.scenes.game);
            this.scene.stop(constants.scenes.ui); // Parar a cena da UI
            this.scene.start(constants.scenes.mainMenu);
        });
    }
}
