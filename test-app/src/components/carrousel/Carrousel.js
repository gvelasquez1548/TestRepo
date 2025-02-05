import React, { useState } from "react";
import "./Carrousel.css";

const Carrousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevious} className="carousel__button carousel__button--left">‹</button>
            <div className="carousel__image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel__image" />
            </div>
            <button onClick={goToNext} className="carousel__button carousel__button--right">›</button>
        </div>
    );
};

export default Carrousel;