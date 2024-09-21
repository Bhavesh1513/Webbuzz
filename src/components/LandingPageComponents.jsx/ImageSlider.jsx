import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

// Import images from the assets folder
import image1 from "../../assets/LandingPageCricket.jpg";
import image2 from "../../assets/LandingPageAusCaptain.jpeg";
import image3 from "../../assets/LandingPageGround.jpeg";
import image4 from "../../assets/LandingPageInd.jpeg";
import image5 from "../../assets/LandingPageman.jpg";
import image6 from "../../assets/LandingpageSA.jpg";

const images = [image1, image2, image3, image4, image5, image6];

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
        <div className="mt-64 text-center pb-5 ">
            <div className="text-5xl py-5">Discover Stunning Views Experience Every Angle with Dynamic Slides</div>

            <div className="slider border-2 ">

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
