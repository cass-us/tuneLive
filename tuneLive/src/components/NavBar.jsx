
import logo from "../assets/music.png";

import backgroundVideo from '../assets/VID1.mp4';


const NavBar = () => {
    return (
      <nav className="">
        <div className="bg-green-200 flex justify-between items-center">
          <div className="flex p-0 m-0">
            <img src={logo} alt="Logo" className="w-20 m-4 p-0" />
            <h2 className="p-0 m-8 font-bold text-3xl">
              Tune
              <span className="text-red-600"> Live</span>
            </h2>
          </div>
          <ul className="flex justify-center items-center space-x-4 font-bold gap-4 mx-auto">
            <li className="">
              <a href="#">New Trends</a>
            </li>
            <li>
              <a href="#">Live Events</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="relative h-screen">
          <video
            className="absolute top-0 left-0 w-full h-1/2 object-cover"
            src={backgroundVideo}
            autoPlay
            loop
            muted
          />

          <div className="relative flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h1 className="text-white text-center text-4xl m-4">
              Dance to the rhythm of your heart
            </h1>
            <div className="w-3/4 h-40 mx-auto">
              <p className="text-gray-300 text-center">
                Music makes us whole. Music is the language of emotions.
                Offering the music of tomorrow today. Music is an expression of
                self. Discover the magic of music. It’s all about the music.
                Because life needs music. Music makes me high.
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  