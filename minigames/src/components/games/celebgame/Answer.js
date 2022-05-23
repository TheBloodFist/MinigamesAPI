import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import styles2 from './Celeb.module.css'

class Answer extends Component {



  

    render() {
        return(
        <div>
        
            <p className={styles2.up}>{this.props.name.name}</p>
            <p>{this.props.name.occupation[0]}</p>
            <p className={styles2.amount}>{this.props.pos}</p>
           
        </div>
        
        
        );
        
        
    }

}

export default Answer;