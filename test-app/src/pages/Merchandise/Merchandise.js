import React from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import "./Merchandise.css";

const Merchandise = () => {
    return(
        <>
        <Header/>
        <div className="Merchandise-Container">
            <h1><strong>MERCHANDISE</strong></h1>
            <div className="Merchandise-Content">
                <div className="MerchCard">
                    <div className="MerchCard-Tool"></div>
                    <h3><a href="...">HOME IMPROVEMENT ITEMS AND TOOLS</a></h3>
                </div>
                <div className="MerchCard">
                    <div className="MerchCard-Auction"></div>
                    <h3><a href="...">ONLINE AUCTIONS</a></h3>
                </div>
                <div className="MerchCard">
                    <div className="MerchCard-Pallets"></div>
                    <h3><a href="...">HOME IMPROVEMENT PALLETS</a></h3>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Merchandise;