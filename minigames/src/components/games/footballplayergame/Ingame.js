
import { Component } from "react/cjs/react.production.min";

import styles from './../../MinTemplates/Standard.module.css';
import Answer from "./Answer";
import Navbar from './../../Navbar.js';
import styles2 from './Football.module.css';

class Ingame extends Component {


    constructor(props) {
        super(props);
        let comps = {"liga":[]}
        this.state = {
            daten: comps
        }
    }

    componentDidMount(){
        console.log("mounted");
        this.getData();
    }

    getData = (value) => {


        
        let randomurl;

        let i;
        let e=0
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

        console.log(randomurl);

        let url = 'https://api.football-data.org/v2/competitions/'+randomurl+'/scorers';
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


                console.log(randomurl)
                this.setState({ [randomurl]: data})
                e++
            });
        //.then(data => this.setState({daten: data}));
        
        }
    };

    getPlayer = ()=>{
       
        let randomurl
        switch (Math.floor(Math.random() * 3)) {

            

           

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
        let zahl = Math.floor(Math.random() * 10);
        let name;
        let playerclub;
       let liga=this.state[randomurl]
        
        console.log(liga)
      
        return ["hello", "hallo"];
    }



    render() {
        let random = Math.floor(Math.random() * 4) + 1;
        let player = this.getPlayer();
        return (
          
            <div>
                  <Navbar/>
                <h1>{this.props.name}</h1>
                <br></br>
                <br></br>
               <p>Hier: {player[1]}</p>
                <div className={styles2.middlediv}>
                    <div className={styles2.antworten}>
                    
                            <Answer number="1" verein={player[0]} v={random}/>
                            <Answer number="2" verein={player[0]} r={random}/>
                            <Answer number="3" verein={player[0]} r={random}/>
                            <Answer number="4" verein={player[0]} r={random}/>

                    </div>
                    
               </div>
            </div>
        );
    }

}

export default Ingame;