import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Navbar.module.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    NavLink,
    BrowserRouter
  } from "react-router-dom";


class Navbar extends Component {


    
    
    render() {
        return (
            <div className={styles.bar}>
                 <NavLink to={"/.."}>
                <h1 className={styles.headline}>MiniGames</h1>
                </NavLink>
                        </div>

        )
    }

}

export default Navbar;