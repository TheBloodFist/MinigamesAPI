import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Ingame from './components/games/footballplayergame/Ingame.js';
import Flaggame from './components/games/flaggame/Flaggame.js';
import Celebgame from './components/games/celebgame/Celebgame.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    


    
    <Routes>
       <Route exact path="" element={<App />}/>
        <Route exact path="footballgame" element={<Ingame/>}/>
        <Route exact path="flaggame" element={<Flaggame/>}/>
        <Route exact path="celebgame" element={<Celebgame/>}/>
        </Routes>
   
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
