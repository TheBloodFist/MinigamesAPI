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
               <p className={styles.text}>{this.props.gamename}</p>
               <div className={styles.game}>
               <img src={this.props.url}></img>
               
    
        
            
                
                
               
                </div>
                </NavLink>
           
        )
    }

}

export default Game;