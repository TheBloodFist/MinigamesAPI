<<<<<<< HEAD

import { Component } from "react/cjs/react.production.min";

import styles from './../../MinTemplates/Standard.module.css';
import Answer from "./Answer";
import Navbar from './../../Navbar.js';
import styles2 from './Football.module.css';

class Ingame extends Component {


    constructor(props) {
        super(props);
        let comps = { "liga": [] }
        this.state = {
            daten: comps
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = (value) => {

        console.log("asdf")


        let randomurl;

        let i;
        let e = 0
        for (i = 0; i < 4; i++) {


            switch (i) {





                case 1:
                    randomurl = 'BL1';
                    break;

                case 2:
                    randomurl = 'FL1';
                    break;

                case 3:
                    randomurl = 'PL';
                    break;

                case 0:

                    randomurl = 'CL';
                    break;
            }



            let url = 'https://api.football-data.org/v2/competitions/' + randomurl + '/scorers';
            fetch(url,

                {
                    method: "GET",
                    headers: {
                        "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    switch (e) {





                        case 1:
                            randomurl = 'BL1';
                            break;

                        case 2:
                            randomurl = 'FL1';
                            break;

                        case 3:
                            randomurl = 'PL';
                            break;

                        case 0:

                            randomurl = 'CL';
                            break;
                    }



                    this.setState({ [randomurl]: data })
                    e++
                });
            //.then(data => this.setState({daten: data}));


        }
        this.setState({ fertig: true })
    };

    getPlayer = () => {


        let zahl = Math.floor(Math.random() * 10);
        let oneleague
        let name;
        let playerclub;

        if (!this.state.fertig) {
            console.log("no")
            name = "Loading"
            playerclub = "loading"
        }

        else {
            console.log("yes")

           
            switch (Math.floor(Math.random() * 3)) {





                case 1:
                    oneleague=this.state.BL1
                    break;

                case 2:
                    oneleague=this.state.FL1
                    break;

                case 3:
                    oneleague=this.state.PL
                    break;

                case 0:
                    oneleague=this.state.CL
                    break;
            }

            console.log(oneleague)


        }
        return [playerclub, name];
    }



    render() {
        let random = Math.floor(Math.random() * 4) + 1;
        let player = this.getPlayer();
        console.log(player)
        return (

            <div>
                <Navbar />
                <h1>{this.props.name}</h1>
                <br></br>
                <br></br>
                <p>Hier: {player[1]}</p>
                <div className={styles2.middlediv}>
                    <div className={styles2.antworten}>

                        <Answer number="1" verein={player[0]} v={random} />
                        <Answer number="2" verein={player[0]} r={random} />
                        <Answer number="3" verein={player[0]} r={random} />
                        <Answer number="4" verein={player[0]} r={random} />

                    </div>

                </div>
            </div>
        );
    }

}

=======

import { Component } from "react/cjs/react.production.min";

import styles from './../../MinTemplates/Standard.module.css';
import Answer from "./Answer";
import Navbar from './../../Navbar.js';
import styles2 from './Football.module.css';

class Ingame extends Component {


    constructor(props) {
        super(props);
        let comps = { "liga": [] }
        this.state = {
            daten: comps
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = (value) => {

        console.log("asdf")


        let randomurl;

        let i;
        let e = 0
        for (i = 0; i < 4; i++) {


            switch (i) {





                case 1:
                    randomurl = 'BL1';
                    break;

                case 2:
                    randomurl = 'FL1';
                    break;

                case 3:
                    randomurl = 'PL';
                    break;

                case 0:

                    randomurl = 'CL';
                    break;
            }



            let url = 'https://api.football-data.org/v2/competitions/' + randomurl + '/scorers';
            fetch(url,

                {
                    method: "GET",
                    headers: {
                        "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    switch (e) {





                        case 1:
                            randomurl = 'BL1';
                            break;

                        case 2:
                            randomurl = 'FL1';
                            break;

                        case 3:
                            randomurl = 'PL';
                            break;

                        case 0:

                            randomurl = 'CL';
                            break;
                    }



                    this.setState({ [randomurl]: data })
                    e++
                });
            //.then(data => this.setState({daten: data}));


        }
        this.setState({ fertig: true })
    };

    getPlayer = () => {


        let zahl = Math.floor(Math.random() * 10);
        let oneleague
        let name;
        let playerclub;

        if (!this.state.fertig) {
            console.log("no")
            name = "Loading"
            playerclub = "loading"
        }

        else {
            console.log("yes")

           
            switch (Math.floor(Math.random() * 3)) {





                case 1:
                    oneleague=this.state.BL1
                    break;

                case 2:
                    oneleague=this.state.FL1
                    break;

                case 3:
                    oneleague=this.state.PL
                    break;

                case 0:
                    oneleague=this.state.CL
                    break;
            }

            console.log(oneleague)


        }
        return [playerclub, name];
    }



    render() {
        let random = Math.floor(Math.random() * 4) + 1;
        let player = this.getPlayer();
        console.log(player)
        return (

            <div>
                <Navbar />
                <h1>{this.props.name}</h1>
                <br></br>
                <br></br>
                <p>Hier: {player[1]}</p>
                <div className={styles2.middlediv}>
                    <div className={styles2.antworten}>

                        <Answer number="1" verein={player[0]} v={random} />
                        <Answer number="2" verein={player[0]} r={random} />
                        <Answer number="3" verein={player[0]} r={random} />
                        <Answer number="4" verein={player[0]} r={random} />

                    </div>

                </div>
            </div>
        );
    }

}

>>>>>>> 1b8e86a9671c6ac62f7118448ec060159a2cd4fc
export default Ingame;