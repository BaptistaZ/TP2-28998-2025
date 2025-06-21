import Phaser from "phaser";
import constants from "../constants";

export default class PauseMenu extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.pauseMenu });
    }

    create() {
        const { width, height } = this.scale;

        const backgroundOverlay = this.add.graphics();
        backgroundOverlay.fillStyle(0x000000, 0.85); 
        backgroundOverlay.fillRect(0, 0, width, height);

        // Imagem do painel de pausa
        this.add.image(width / 2, height / 2, "pauseMenuBackground")
            .setOrigin(0.5)
            .setScale(0.7);

        // Botão “Continue” — retoma jogo e fecha o menu
        const continueButton = this.add
            .zone(width / 2 + 86, height / 2 + 40, 150, 170)
            .setOrigin(0.5)
            .setInteractive();

        // Botão “Quit” — termina jogo e volta ao menu principal
        const quitButton = this.add
            .zone(width / 2 - 68, height / 2 + 40, 146, 170)
            .setOrigin(0.5)
            .setInteractive();

        continueButton.on('pointerdown', () => {
            this.scene.resume(constants.scenes.game);           // retoma física e lógica
            this.scene.stop();                                 // fecha o menu de pausa        
            this.scene.resume(constants.scenes.ui);           // reativa UI   
        });

        quitButton.on('pointerdown', () => {
            this.scene.stop(constants.scenes.game);          // encerra jogo
            this.scene.stop(constants.scenes.ui);            // fecha UI
            this.scene.start(constants.scenes.mainMenu);    // volta ao MainMenu    
        });
    }
}
