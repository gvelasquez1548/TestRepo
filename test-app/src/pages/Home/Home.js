import React from "react";
import Header from "../../components/header/Header.js"
import Body from "../../components/body/Body.js";
import MainContent from "../../components/mainContent/MainContent.js";
import Footer from "../../components/footer/Footer.js";
import "./Home.css";

const Home = () => {
    return (
        <Body elements={<>
            <Header />
            <MainContent />
            <div className="homeContainer">
                <h1>WELLCOME TO ELITE SURPLUS DISTRIBUTORS</h1>
                <div className="homeVideo"><video controls preload="none" playsinline="true" src="https://video.wixstatic.com/video/a4baa6_5bf5d8866c34475d848c2643807542d5/480p/mp4/file.mp4"></video></div>
            </div>

            <div className="homeInfo">
                <h1>ONLINE ONLY AUCTION</h1>
                <p>
                Thank you for your patience in this situation. Due to circumstances out of our control, the next Auctions will be online only until further notice. The auction will start at 9:00 AM like usual please log on to, Abamex, the online platform that we use to do your bidding, Auctions are currently every 2 weeks on Tuesday  
                </p>
                <div className="auctDates">
                    <h2 className="auctionTitle">AUCTION DATES</h2>
                    <ul className="auctDatesList">
                        <li>Online Auction Tuesday February 4, 2025</li>
                        <li>Online Auction Tuesday February 18, 2025</li>
                        <li>Online Auction Tuesday March 04, 2025</li>
                        <li>Online Auction Tuesday March 18, 2025</li>
                        <li>Online Auction Tuesday April 01, 2025</li>
                        <li>Online Auction Tuesday April 15, 2025</li>
                        <li>Online Auction Tuesday April 29, 2025</li>
                        <li>Online Auction Tuesday May 13, 2025</li>
                        <li>Online Auction Tuesday May 27, 2025</li>
                        <li>Online Auction Tuesday June 10, 2025</li>
                        <li>Online Auction Tuesday June 24, 2025</li>
                        <li>Online Auction Tuesday July 08, 2025</li>
                        <li>Online Auction Tuesday August 05, 2025</li>
                        <li>Online Auction Tuesday August 19, 2025</li>
                        <li>Online Auction Tuesday September 02, 2025</li>
                        <li>Online Auction Tuesday September 16, 2025</li>
                        <li>Online Auction Tuesday September 30, 2025</li>
                        <li>Online Auction Tuesday October 14, 2025</li>
                        <li>Online Auction Tuesday October 28, 2025</li>
                        <li>Online Auction Tuesday November 11, 2025</li>
                        <li>Online Auction Tuesday November 25, 2025</li>
                        <li>Online Auction Tuesday December 09, 2025</li>
                        <li>Online Auction Tuesday December 16, 2025</li>
                    </ul>
                </div>

                <div className="resellerInfo">
                    <h1>RESELLERS ONLY</h1>
                    <h2>From now on until further notice our facilities will only sell to resellers only. Elite Sursplus Distributors is no longer open to the public only to resellers.</h2>
                </div>

                <div className="aboutUs">
                    <h1>WHO WE ARE</h1>
                    <p>We conduct sales of various types of store returns, liquidations, and overstock items. Our inventory consists of home improvement items, as well as many brands of tools. Our items are updated once a week, so stock is always changing. We are happy to sell you individual items or multiple pallets.</p>
                    <p>We are open from Monday through Saturday in our Hesperia, CA warehouse.</p>
                    <p>We cater to any resale businesses, large or small, experienced or new. We have no minimum order amount, and a business license is not required to purchase from us. We at Elite Surplus Distributors LLC have 10 years of industry information experience.</p>
                    <p>Customers are welcome to visit our facility, meet us in person, and visually inspect merchandise prior to purchase.</p>
                </div>

                <iframe title="theMap" className="ESDLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.417296260505!2d-117.28871812396653!3d34.44155357301291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c367c0c2db994f%3A0x4f3d505e9f8a2c17!2sElite%20Surplus%20Distributors%2CLLC!5e0!3m2!1sen!2sus!4v1738617516731!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>    
            <Footer />
        </>} />
    )
}

export default Home;