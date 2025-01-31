import React from "react";
import Header from "../../components/header/Header.js"
import Footer from "../../components/footer/Footer.js";
import "./Home.css";

const Home = () => {
    return(
        <>
        <Header/>
        <div className="homeContainer">
            <h1>WELLCOME TO ELITE SURPLUS DISTRIBUTORS</h1>
            <div className="homeVideo"><video controls preload="none" playsinline="true" src="https://video.wixstatic.com/video/a4baa6_5bf5d8866c34475d848c2643807542d5/480p/mp4/file.mp4"></video></div>            
        </div>
        <Footer/>
        </>
    ) 

}

export default Home;