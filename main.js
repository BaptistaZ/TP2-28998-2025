import Phaser from "phaser";
import { Plugin as NineSlicePlugin } from "phaser3-nineslice";

import Game from "./src/scenes/Game";
import Preloader from "./src/scenes/Preloader";
import UIScene from "./src/scenes/UIScene";
import GameOver from "./src/scenes/GameOver";
import MainMenu from "./src/scenes/MainMenu";
import PauseMenu from "./src/scenes/PauseMenu"; // Importe a cena do menu de pausa
import Options from "./src/scenes/Options"; // Caso tenha

const config = {
    type: Phaser.AUTO,
    width: 1000, // Aumenta a largura
    height: 700, // Aumenta a altura
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    plugins: {
        global: [NineSlicePlugin.DefaultCfg],
    },
    scene: [Preloader, MainMenu, Game, UIScene, GameOver, PauseMenu , Options], // Certifique-se de que a ordem das cenas está correta
};

export default new Phaser.Game(config);
