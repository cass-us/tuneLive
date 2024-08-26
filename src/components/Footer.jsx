const Footer = () => {
    return (
      <footer className="bg-black bg-opacity-90 text-white h-32 flex flex-col justify-center items-center">
        <ul className="flex justify-center items-center space-x-4 font-bold gap-4 mb-2">
          <li>
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
        <p className="text-center">© 2024 Tune Live. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  