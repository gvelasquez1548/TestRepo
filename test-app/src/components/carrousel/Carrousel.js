import React from "react";
import "./Carrousel.css";

const Carrousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel">
                <input className="carousel__activator" type="radio" name="carousel" id="slide1" defaultChecked />
                <input className="carousel__activator" type="radio" name="carousel" id="slide2" />
                <input className="carousel__activator" type="radio" name="carousel" id="slide3" />
                <input className="carousel__activator" type="radio" name="carousel" id="slide4" />
                <input className="carousel__activator" type="radio" name="carousel" id="slide5" />

                <label className="carousel__arrow carousel__arrow--left" htmlFor="slide5">
                    &#10094;
                </label>

                <label className="carousel__arrow carousel__arrow--right" htmlFor="slide2">
                    &#10095;
                </label>

                <div className="carousel__controls">
                    <label className="carousel__control carousel__control--backward" htmlFor="slide5"></label>
                    <label className="carousel__control carousel__control--forward" htmlFor="slide2"></label>
                </div>
                <div className="carousel__controls">
                    <label className="carousel__control carousel__control--backward" htmlFor="slide1"></label>
                    <label className="carousel__control carousel__control--forward" htmlFor="slide3"></label>
                </div>
                <div className="carousel__controls">
                    <label className="carousel__control carousel__control--backward" htmlFor="slide2"></label>
                    <label className="carousel__control carousel__control--forward" htmlFor="slide4"></label>
                </div>
                <div className="carousel__controls">
                    <label className="carousel__control carousel__control--backward" htmlFor="slide3"></label>
                    <label className="carousel__control carousel__control--forward" htmlFor="slide5"></label>
                </div>
                <div className="carousel__controls">
                    <label className="carousel__control carousel__control--backward" htmlFor="slide4"></label>
                    <label className="carousel__control carousel__control--forward" htmlFor="slide1"></label>
                </div>

                <div className="carousel__track">
                    <div className="carousel__slide" style={{ backgroundImage: "url(https://unsplash.it/300?random)" }}></div>
                    <div className="carousel__slide" style={{ backgroundImage: "url(https://unsplash.it/600?random)" }}></div>
                    <div className="carousel__slide" style={{ backgroundImage: "url(https://unsplash.it/900?random)" }}></div>
                    <div className="carousel__slide" style={{ backgroundImage: "url(https://unsplash.it/1200?random)" }}></div>
                    <div className="carousel__slide" style={{ backgroundImage: "url(https://unsplash.it/1500?random)" }}></div>
                </div>

                <div className="carousel__indicators">
                    <label className="carousel__indicator" htmlFor="slide1"></label>
                    <label className="carousel__indicator" htmlFor="slide2"></label>
                    <label className="carousel__indicator" htmlFor="slide3"></label>
                    <label className="carousel__indicator" htmlFor="slide4"></label>
                    <label className="carousel__indicator" htmlFor="slide5"></label>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;