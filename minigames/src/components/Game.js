import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Game.module.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    NavLink,
    BrowserRouter
  } from "react-router-dom";

  

class Game extends Component {


    
    
    render() {
        return (
            
           <NavLink to={"/"+this.props.gamename}>
               <div className={styles.game}
    >
        
            
                
                <p className={styles.text}>{this.props.gamename}</p>
               
                </div>
                </NavLink>
           
        )
    }

}

export default Game;