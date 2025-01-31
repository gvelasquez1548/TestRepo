import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carrousel from "../../components/carrousel/Carrousel";
import "./Auction.css";

const Auction = () => {
    return(
        <>
        <Header/>
        <div className="Auction-Container">
            <h1>Auction</h1>
            <Carrousel/>
        </div>
        <Footer/>
        </>
    )
}

export default Auction;