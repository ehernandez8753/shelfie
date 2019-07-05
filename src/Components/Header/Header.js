import React, { Component } from "react";
import './Header.css';
import {HashRouter, Link} from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div className="mainHeader">
                <h2 className="headerLogo">Shelfie</h2>
                <Link to="/" className="headerButton">
                    Dashboard
                </Link>
                <Link to="/add" className="headerButton">
                    Add Inventory
                </Link>
            </div>
        )
    }
}

export default Header;