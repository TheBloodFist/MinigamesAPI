import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Navbar from './../../Navbar.js';
import Quiz from './Quiz.js';


class Flaggame extends Component {



   
    render() {
        return(
        <div>
            <Navbar/>
            <h2>Flaggame</h2>
            <p>Klicke auf die richtige Flagge</p>
            <Quiz/>
            
        </div>
        
        
        );
        
        
    }

}

export default Flaggame;