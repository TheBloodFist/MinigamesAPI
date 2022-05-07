import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from './../../MinTemplates/Standard.module.css';
import Navbar from './../../Navbar.js';


class Celebgame extends Component {





    componentDidMount(){
        
        this.getData();
    }

    getData = (value) => {



        let name = 'Michael Jordan'
        let api_url = 'https://api.api-ninjas.com/v1/celebrity?min_height=1.69&max_height=1.70'

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


    }
   
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