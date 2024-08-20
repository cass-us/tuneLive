
import logo from '../assets/music.png';

const NavBar = () => {
  return (
    <nav className="">
      <div className="flex p-0 m-0">
        <img
          src={logo}
          alt="Logo"
          className="w-20 m-4 p-0" 
        />
        <h2 className=' p-0 m-8 font-bold text-3xl'>Tune
            <span className='text-red-600'> Live</span> </h2>
      </div>
       <ul>
        <li><a href="">New Trends</a></li>
        <li><a href="">New Trends</a></li>
        <li><a href="">New Trends</a></li>
       </ul>
       <div>
          <button>Sign Up</button>
          <button>Login</button>
       </div>
    </nav>
  );
}

export default NavBar;
