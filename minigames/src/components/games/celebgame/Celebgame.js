import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Navbar from './../../Navbar.js';


class Celebgame extends Component {





    componentDidMount(){
        
        this.getData();
    }

    getData = (value) => {


        var min = 1.5;
        var max = 2;
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
            
                
                console.log(data)
                this.setState({ Daten: data})

     
                
                
            
        });

      this.getRandomPerson()


    }


    getRandomPerson = (value) => { 
        //console.log(this.state.Daten)
    };
   
    render() {
        return(
        <div>
            <Navbar/>
            <h2>Celebrity-Networth-Game</h2>
            <p>Text ....</p>
          
            
        </div>
        
        
        );
        
        
    }

}

export default Celebgame;