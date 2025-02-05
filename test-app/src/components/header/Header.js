import React from "react";
import './Header.css';
import Menu from '../menu/Menu.js';

const Header = () => {
    return (
        <div className= 'header-Container'>
            <div className="Logo"/>
            <Menu/>
        </div>
    )
}

export default Header