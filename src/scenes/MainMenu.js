import Phaser from "phaser";
import constants from "../constants";

export default class MainMenu extends Phaser.Scene {

    // Inicializa a cena do menu principal
    constructor() {
        super({ key: constants.scenes.mainMenu });
    }

    // Cria os elementos do menu principal
    create() {
        const { width, height } = this.scale;

        this.add.image(width / 2, height / 2, "menuBackground")
            .setOrigin(0.5)
            .setDisplaySize(width, height);

        // Zonas invisíveis que atuam como botões
        const playButton = this.add.zone(width / 2, height / 2 + 0, 420, 90).setOrigin(0.5).setInteractive();
        const optionsButton = this.add.zone(width / 2, height / 2 + 117, 420, 90).setOrigin(0.5).setInteractive();
        const exitButton = this.add.zone(width / 2, height / 2 + 235, 420, 90).setOrigin(0.5).setInteractive();

        // Arranca o jogo
        playButton.on('pointerdown', () => {
            this.scene.start(constants.scenes.game); 
        });

        // Abre o menu de opções
        optionsButton.on('pointerdown', () => {
            this.scene.start(constants.scenes.options); 
        });

        // Fecha a aplicação
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
