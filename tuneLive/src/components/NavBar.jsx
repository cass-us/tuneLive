import { useState, useEffect } from 'react';
import logo from "../assets/music.png";
import lick from "../assets/m.png";
import live from "../assets/live.png";
import cast from "../assets/rocknroll.png";
import event from "../assets/live.png";
import backgroundVideo from '../assets/VID1.mp4';

const NavBar = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [lick, cast, event];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

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
      <div className="relative bg-black bg-opacity-90 flex justify-between items-center">
        <div className="flex p-0 m-0">
          <img src={logo} alt="Logo" className="w-20 m-4 p-0" />
          <h2 className="p-0 m-8 font-bold text-3xl text-red-500">
            Tune <span className="text-white">Live</span>
          </h2>
        </div>
        <ul className="flex justify-center items-center space-x-4 font-bold text-white gap-4 mx-auto">
          <li className="">
            <a href="#">New Trends</a>
          </li>
          <li className="flex gap-2">
            <a href="#">Live Events</a>
            <img src={live} alt="Live Icon" className="w-8" />
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
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
