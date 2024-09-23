import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

import image1 from "../../assets/landingPageTrophy.jpg";
import image2 from "../../assets/LandingPagePatCummins.jpg";
import image3 from "../../assets/LandingPageCricketGround.jpg";
import image4 from "../../assets/LandingPageInd.jpeg";
import image6 from "../../assets/LandingpageSA.jpg";
import image5 from '../../assets/alfred-kenneally-XqFeVprJ3jQ-unsplash.jpg'

const images = [image1, image2, image3, image4,image5,image6,];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 800); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="mt-64 text-center pb-5 mx-10 ">
            <div className="text-5xl py-5">Discover Stunning Views Experience Every Angle with Dynamic Slides</div>

            <div className="slider border-2 mt-10 ">

                {images.map((image, index) => (
                    <div
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                        key={index}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
