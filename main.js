import Phaser from "phaser";
import { Plugin as NineSlicePlugin } from "phaser3-nineslice";

import Game from "./src/scenes/Game";
import Preloader from "./src/scenes/Preloader";
import UIScene from "./src/scenes/UIScene";
import GameOver from "./src/scenes/GameOver";
import MainMenu from "./src/scenes/MainMenu";
import PauseMenu from "./src/scenes/PauseMenu"; 
import Options from "./src/scenes/Options"; 

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
    scene: [Preloader, MainMenu, Game, UIScene, GameOver, PauseMenu , Options], 
};

export default new Phaser.Game(config);
