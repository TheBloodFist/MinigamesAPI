import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Answer from './Answer.js';


class Quiz extends Component {



  
    constructor(props) {
        super(props);
        this.state = {
            Country: "loading",
            Points: 0
            
        }
    }

    componentDidMount(){
        
        this.getCountry();
    }



 

    getCountry = (value) => {

        let randomnumber = Math.floor(Math.random() * 249)
       


        fetch('https://restcountries.com/v3.1/all?',

            {
                method: "GET",
                headers: {
                    
                }
            })
            .then(response => response.json())
            .then(data => { 
            
                
                
                this.setState({ Country: data[randomnumber].name.common})
                this.setState({ Flag: data[randomnumber].flags.png})
                this.setState({ Daten: data})
                
                
            
        });


    }

   


    render() {
        var reihenfolge = Math.floor(Math.random() * (5 - 1)) + 1

        
        return(
        <div>
            <p>{this.state.Country}</p>
            <div  className={styles.flagdiv}>
                <Answer nummer="1" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten}/>
                <Answer nummer="2" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten}/>
                <Answer nummer="3" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten}/>
                <Answer nummer="4" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten}/>
            </div>
        </div>
        
        
        );
        
        
    }

}

export default Quiz;