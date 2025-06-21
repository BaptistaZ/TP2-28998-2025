import Phaser from "phaser";
import constants from "../constants";

export default class GameOver extends Phaser.Scene {

    // Inicializa a cena de Game Over
    constructor() {
        super({ key: constants.scenes.gameOver });
    }

    create() {
        const { width, height } = this.scale;

        // Imagem de fundo
        this.add.image(width / 2, height / 2, "gameOverBackground")
            .setOrigin(0.5)
            .setScale(0.7);

        // Zonas interativas invisíveis que actuam como botões
        const retryButton = this.add
            .zone(width / 2 - 177, height / 2 + 16, 180, 230)
            .setOrigin(0.5)
            .setInteractive();
        const menuButton = this.add
            .zone(width / 2 + 4, height / 2 + 16, 180, 230)
            .setOrigin(0.5)
            .setInteractive();
        const exitButton = this.add
            .zone(width / 2 + 183, height / 2 + 16, 180, 230)
            .setOrigin(0.5)
            .setInteractive();

        // Reinicia o jogo
        retryButton.on('pointerdown', () => {
            this.scene.stop(constants.scenes.gameOver);
            this.scene.stop(constants.scenes.game);
            this.scene.start(constants.scenes.game); 
        });

        // Volta ao menu principal
        menuButton.on('pointerdown', () => {
            this.scene.stop(constants.scenes.gameOver);
            this.scene.stop(constants.scenes.game);
            this.scene.start(constants.scenes.mainMenu); 
        });

        // Fecha a janela do browser
        exitButton.on('pointerdown', () => {
            window.open('', '_self', ''); 
            window.close();
        });
    }
}
