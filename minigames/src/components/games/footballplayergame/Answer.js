import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './Football.module.css';

class Answer extends Component {


    
    
    render() {
        let vereine = ['FC Bayern München', 'AFC Ajax', 'Liverpool FC', 'Real Madrid CF', 'RB Leipzig', 'FC Sheriff Tiraspol', 'Manchester United FC', 'Manchester City FC', 'Paris Saint-Germain FC', 'Bayer 04 Leverkusen', 'Borussia Dortmund', 'Ibis Sport Club', 'FC Sophienthal', '1. FC Köln', 'Bayer 04 Leverkusen', '1. FC Union Berlin', 'FC Düns','AS Monaco FC', 'Stade Rennais FC 1901', 'Lille OSC', 'Clermont Foot 63', 'OGC Nice', 'RC Strasbourg Alsace', 'FC Nantes', 'Olympique Lyonnais', 'Tottenham Hotspur FC', 'Brentford FC', 'Leicester City FC'];
        let name;

        if(this.props.r==parseInt(this.props.number)) {
            console.log(this.props.verein)
            name = this.props.verein +"richtig"
        }

        else {
            let randomNumber = Math.floor(Math.random()*vereine.length);
            name = vereine[randomNumber]
        }

        
        return (
            <div>
                
                <button className={styles.footballer}>{name}</button>
              
            </div>
            
        )
    }

}

export default Answer;