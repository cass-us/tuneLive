import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/music.png";
import lick from "../assets/m.png";
import cast from "../assets/rocknroll.png";
import event from "../assets/live.png";
import backgroundVideo from '../assets/VID1.mp4';

const data = [
    { label: "Home", to: "/" },
    { label: "NewTrends", to: "/NewTrends" },
    { label: "LiveEvents", to: "/LiveEvents" },
    { label: "About Us", to: "/AboutUs" },
    { label: "Contacts", to: "/contacts" },
];

const NavBar = () => {
   
    const [toggleIcon, setToggleIcon] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [lick, cast, event];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <nav className="relative">
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    src={backgroundVideo}
                    autoPlay
                    loop
                    muted
                />
            </div>
            <div className="relative bg-black bg-opacity-90 flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-20 m-4" />
                    <h2 className="font-bold text-3xl text-red-500">
                        Tune <span className="text-white">Live</span>
                    </h2>
                </div>
                <ul className={`flex justify-center items-center space-x-4 font-bold text-white ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navBar__container__menu__item">
                            <Link className="navBar__container__menu__item__links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative flex flex-col justify-center items-center bg-black bg-opacity-50 pt-8">
                <h1 className="text-white text-center text-4xl m-4">
                    Dance to the rhythm of your heart
                </h1>
                <div className="w-3/4 h-40 mx-auto">
                    <p className="text-gray-300 text-center mb-8">
                        Music makes us whole. Music is the language of emotions. Offering the music of tomorrow today. Music is an expression of self. Discover the magic of music. It’s all about the music. Because life needs music. Music makes me high.
                    </p>
                    <div className="flex justify-center space-x-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Image ${index}`}
                                className={`w-8 transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
