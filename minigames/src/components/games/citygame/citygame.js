import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Navbar from './../../Navbar.js';


class citygame extends Component {



   
    render() {
        return(
        <div>
            <Navbar/>
            <h2>Citygame</h2>
            <p>Füge die richtige Stadt ein</p>
        </div>
        
        
            );
        
        
        }

}

export default citygame;