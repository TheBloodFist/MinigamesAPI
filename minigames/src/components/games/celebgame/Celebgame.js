import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Navbar from './../../Navbar.js';
import Answer from './Answer.js';
import styles2 from './Celeb.module.css'



class Celebgame extends Component {


    constructor(props) {
        
        super(props);
        this.state = {
            
            on: true,
            score: 0,
            Person1: {
                "name": "loading",
                "net_worth": "loading",
                "gender": "female",
                "nationality": "se",
                "occupation": [
                    "loading",
                    "singer-songwriter",
                    "record_producer",
                    "songwriter"
                ],
                "height": 1.6,
                "birthdy": "1979-06-12",
                "age": 42,
                "is_alive": true
            },
            Person2: {
                "name": "loading",
                "net_worth": "loading",
                "gender": "female",
                "nationality": "se",
                "occupation": [
                    "loading",
                    "singer-songwriter",
                    "record_producer",
                    "songwriter"
                ],
                "height": 1.6,
                "birthdy": "1979-06-12",
                "age": 42,
                "is_alive": true
            },

            count: 0
        }
    }

    componentDidMount(){
        
        this.getData();
    }


    getRandomPerson = (value) => { 


        if (this.state.Daten.length==0) {
            this.getData()
        }

        else {
            let x= Math.round(Math.random() * (this.state.Daten.length))
            console.log(x)
            //console.log(this.state.Daten)

        if(this.state.count==0) {
            this.setState({ Person2: this.state.Daten[x]})  
            let alt = this.state.count
            alt++
            this.setState({ count: alt })
            this.getData()
        }
        else {
            this.setState({Person1: this.state.Person2})
            this.setState({ Person2: this.state.Daten[x]}) 
        }

        }
    };

    getData = (value) => {


        var min = 1.4;
        var max = 2.2;
        var x = (Math.random() * (max - min)) + min;
        
        x=x.toFixed(2)
        console.log(x)
        
        let api_url = 'https://api.api-ninjas.com/v1/celebrity?min_height='+x+'&max_height='+(x+1)+''

        fetch(api_url,

            {
                method: "GET",
                headers: {
                    'X-Api-Key': 'YuczsRUY4Irjy4VJZTVAaw==AEVqeProp5xg0uWs'
                    
                }

            })
            .then(response => response.json())
            .then(data => { 

              
                this.setState({ Daten: data})  
                this.getRandomPerson()
            
        });

     


    }


     
      
   

    richtig = async (value) => {

        this.setState({on: false})
    
        console.log("richtig")
        let alt=this.state.score
        alt++

        this.setState({score: alt})

        this.render()
      

        this.setState({on: true})
        this.getData()
        
        
    }

    falsch = (value) => {
        this.setState({on: false})
        console.log("falsch")
       
        

    }

    getnw = (value) => {
        if(this.state.on) {
            return("")

        }

        else {
            return (Number(this.state.Person2.net_worth).toLocaleString('en'))
        }
       
        

    }

    Check = (value) => {

        if (this.state.on) {
            if(value==1) {
                if(this.state.Person1.net_worth>this.state.Person2.net_worth) {
                    this.falsch()

                }
                else if (this.state.Person1.net_worth==this.state.Person2.net_worth) {
                    this.richtig()
                }
                else {
                    this.richtig()
                }

            }
            else {
                if(this.state.Person1.net_worth>this.state.Person2.net_worth) {
                    this.richtig()

                }
                else if (this.state.Person1.net_worth==this.state.Person2.net_worth) {
                    this.richtig()

                }
                else {
                    this.falsch()
                    
                }

            }
        }
    else {

    }

    }


 
   
    render() {
        
        
      
        return(
        <div>
            <Navbar/>
            <h2>Celebrity-Networth-Game</h2>
            <br></br>
            <br></br>
            <p>Score: {this.state.score}</p>
            <br></br>
            <div className={styles2.hrl}>

                <div className={styles2.person}>
                    <Answer pos={Number(this.state.Person1.net_worth).toLocaleString('en')} name={this.state.Person1}/>
                </div>
                 
                <div>
                    <p className={styles2.vs}>VS</p>
                </div>

                <div className={styles2.person}>
                    <Answer pos={this.getnw()} name={this.state.Person2}/>
                    <button onClick={() => this.Check(1)} className={styles2.bt}>Higher</button><br></br>
                    <button onClick={() => this.Check(2)} className={styles2.bt}>Lower</button>
                </div>
                 
            </div>
            
        </div>
        
        
        );
    }
        
    }



export default Celebgame;