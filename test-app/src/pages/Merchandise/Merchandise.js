import React from "react";
import Header from "../../components/header/Header.js";
import Body from "../../components/body/Body.js";
import Footer from "../../components/footer/Footer.js";
import "./Merchandise.css";

const merch = [
    {
        title: "Home Improvement Items and Tools",
        img: "",
        href: "/Home-Improvement"
    },
    {
        title: "Online Auctions",
        img: "",
        href: "/Auction"
    },
    {
        title: "palettes",
        img: "",
        href: "/Pallets"
    }
]

const Merchandise = () => {
    return (
        <Body elements={<>
            <Header />
            <div className="merchandise-Container">
                <h1><strong>MERCHANDISE</strong></h1>
                <div className="merchandise-Content">
                    <div className="merch-Card">
                        <a href="/Home-Improvement"><div className="merchCard-Tool"></div></a>
                        <h3><a href="/Home-Improvement">HOME IMPROVEMENT ITEMS AND TOOLS</a></h3>
                    </div>
                    <div className="merch-Card">
                        <a href="/Auction"><div className="merchCard-Auction"></div></a>
                        <h3><a href="/Auction">ONLINE AUCTIONS</a></h3>
                    </div>
                    <div className="merch-Card">
                        <a href="/Pallets"><div className="merchCard-Pallets"></div></a>
                        <h3><a href="/Pallets">HOME IMPROVEMENT PALLETS</a></h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>} />
    );
}

export default Merchandise;