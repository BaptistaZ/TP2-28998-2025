import Phaser from "phaser";
import { Plugin as NineSlicePlugin } from "phaser3-nineslice";

import Game from "./src/scenes/Game";
import Preloader from "./src/scenes/Preloader";
import UIScene from "./src/scenes/UIScene";
import GameOver from "./src/scenes/GameOver";
import MainMenu from "./src/scenes/MainMenu";
import PauseMenu from "./src/scenes/PauseMenu"; 
import Options from "./src/scenes/Options"; 

// Configuração global do Phaser
const config = {
    type: Phaser.AUTO,
    width: 1000, 
    height: 700, 
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
    scene: [
    Preloader,   // carrega assets e cria animações
    MainMenu,    // menu principal
    Game,        // cena de jogo
    UIScene,     // camada UI 
    GameOver,    // ecrã de derrota
    PauseMenu,   // menu de pausa
    Options      // definições (mute/unmute)
  ], 
};

export default new Phaser.Game(config);
