import React from "react";
import "./Menu.css";

const Menu = () => {
    return(
        <div className="Menu-Container">
            <ul className="MenuList">
                <li className="MenuItem"><a href="/">Home</a></li>
                <li className="MenuItem"><a href="/Merchandise">Merchandise</a></li>
                <li className="MenuItem"><a href="/Auction">Auction</a></li>
            </ul>
        </div>
    )
}

export default Menu;