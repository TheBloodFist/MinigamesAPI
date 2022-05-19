
import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Answer from './Answer.js';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Country: "loading",
            Points: 0,
            Score: 0
        }
    }

    componentDidMount() {
        this.getCountry();
    }

    PointsUp = (value) => {
        if (value) {
            let alt = this.state.Points
            alt++
            this.setState({ Points: alt })
            if (alt > this.state.Score) {
                this.setState({ Score: alt })
            }

        }
        else {
            this.setState({ Points: 0 })
            console.log("Punkte:" + this.state.Points + "")
        }
        console.log(this.state.Points)
        this.getInfo()
    }





    getCountry = (value) => {
        fetch('https://restcountries.com/v3.1/all?',
            {
                method: "GET",
                headers: {
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ Daten: data })
                this.getInfo()
            });


    }

    getInfo = (value) => {

        let randomnumber = Math.floor(Math.random() * 249)
        let data = this.state.Daten

        this.setState({ Country: data[randomnumber].name.common })
        this.setState({ Flag: data[randomnumber].flags.png })

    }


    render() {

        var reihenfolge = Math.floor(Math.random() * (5 - 1)) + 1


        return (
            <div>
                <p>{this.state.Country}</p>
                <p>Punkte:{this.state.Points}  Highscore:{this.state.Score}</p>
                <div className={styles.flagdiv}>
                    <Answer punkte={this.PointsUp} nummer="1" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten} />
                    <Answer punkte={this.PointsUp} nummer="2" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten} />
                    <Answer punkte={this.PointsUp} nummer="3" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten} />
                    <Answer punkte={this.PointsUp} nummer="4" reihenfolge={reihenfolge} bild={this.state.Flag} daten={this.state.Daten} />
                </div>
            </div>
        );


    }

}


export default Quiz;