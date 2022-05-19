import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';


class Answer extends Component {


    constructor(props) {
        super(props);
        this.state = {
           
            
        }
    }

    componentDidMount(){
        
        
    }


    checkAnswer = (asdf) => {

       if(asdf==this.props.reihenfolge) {
           console.log("yes")
           this.props.punkte(true)

       }
       else {
        this.props.punkte(false)
           console.log("no")

       }

    }


    getData = (value) => {

        let url
        

        if (this.props.reihenfolge==this.props.nummer) {
            url = this.props.bild
        }
        else {
            url = this.props.daten
            
            if(url!=undefined) {
                try {
                url=url[Math.floor(Math.random() * 249)].flags.png
                }
                finally {

                }
            }
            
        }

        return url
    }
  

    render() {
        return(
        <div>
            <button onClick={() => this.checkAnswer(this.props.nummer)}><img className={styles.flagge} src={this.getData()}></img></button>
           
        </div>
        
        
        );
        
        
    }

}

export default Answer;