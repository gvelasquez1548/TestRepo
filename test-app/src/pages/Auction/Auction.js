import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Carrousel from "../../components/carrousel/Carrousel";
import "./Auction.css";

const Auction = () => {
    return (
        <Body elements={<>
            <Header />
            <div className="Auction-Container">
                <div className="auction-content">
                    <div className="auction-carrousel">
                        <Carrousel />
                    </div>
                    <div className="auction-text">
                        <h2><span className="red-text">Online only AUCTION</span></h2>
                        <p>
                            The Our Auctions are held online every other Tuesday, and the days to inspect merchandise will be Monday before the auction. Closed Sunday. Auction as normal start at 9:00 AM on the Abamex platform. Below you will see a picture of the Abamex logo please click it to access the auction.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>} />
    );
};

export default Auction;