import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Grid.module.css";
import Game from './Game.js';

class Grid extends Component {


    
    
    render() {
        return (
        <div>            
            <h1>Choose your game</h1>
            <br>
            </br>
            <br></br>
            <br></br>

            <br></br>


            <div className={styles.games}>
                
                <Game gameurl="footballgame" gamename="footballgame" url="https://www.laola1.at/images/redaktion/images/Fussball/International/Spanien/Barca/Ronaldo-Messi-Montage_fc3cb_f_1280x720.jpg"/>
                <Game gameurl="flaggame" gamename="flaggame" url="https://contentlounge-s3.bf-contentlounge-production.aws.bfops.io/2018-11/austria-3045568_1920.jpg"/>
                <Game gameurl="celebgame" gamename="Celebrity-Networth-Game" url="https://www.vermoegenmagazin.de/wp-content/uploads/2017/09/die-reichsten-menschen-der-welt.jpg"/>
                <Game gameurl="nix" gamename="new Games coming soon!" url="https://img.freepik.com/vektoren-kostenlos/neonart-kommt-bald-gluehendes-hintergrunddesign_1017-25516.jpg?w=2000"/>
                
            </div>
        </div>
           
        )
    }

}

export default Grid;