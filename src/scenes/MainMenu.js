import Phaser from "phaser";
import constants from "../constants";

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: constants.scenes.mainMenu });
    }

    create() {
        const { width, height } = this.scale;

        // imagem de fundo
        this.add.image(width / 2, height / 2, 'menuBackground').setOrigin(0.5).setDisplaySize(width, height);

        // botoes
        const playButton = this.add.zone(width / 2, height / 2 + 0, 420, 90).setOrigin(0.5).setInteractive();
        const optionsButton = this.add.zone(width / 2, height / 2 + 117, 420, 90).setOrigin(0.5).setInteractive();
        const exitButton = this.add.zone(width / 2, height / 2 + 235, 420, 90).setOrigin(0.5).setInteractive();

        
        /*
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xff0000); // Bordas vermelhas
        graphics.strokeRect(playButton.x - playButton.input.hitArea.width / 2, playButton.y - playButton.input.hitArea.height / 2, playButton.input.hitArea.width, playButton.input.hitArea.height);
        graphics.strokeRect(optionsButton.x - optionsButton.input.hitArea.width / 2, optionsButton.y - optionsButton.input.hitArea.height / 2, optionsButton.input.hitArea.width, optionsButton.input.hitArea.height);
        graphics.strokeRect(exitButton.x - exitButton.input.hitArea.width / 2, exitButton.y - exitButton.input.hitArea.height / 2, exitButton.input.hitArea.width, exitButton.input.hitArea.height);
        */

        // Adicionar eventos para os botões
        playButton.on('pointerdown', () => {
            this.scene.start(constants.scenes.game); // Inicia a cena do jogo
        });

        optionsButton.on('pointerdown', () => {
            this.scene.start(constants.scenes.options); // Vai para a cena de opções
        });

        exitButton.on('pointerdown', () => {
            window.open('', '_self', ''); // Para tentar contornar as restrições do navegador
            window.close();
        });

        // Adicionar cursor para os botões
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
