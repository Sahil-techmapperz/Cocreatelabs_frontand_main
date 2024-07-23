import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="flex z-50 bg-[#cfcccc] top-0 left-0 justify-between w-full z-25 items-center p-4 fixed">
      <div className="flex items-center">
        <Link  to="/">
        <img src={Logo} alt="Logo" className="h-10 max-sm:h-7" />
        </Link>
      </div>
      <div className="space-x-6 items-center  hidden md:flex">
        <ul className="flex space-x-6 text-center">
          <li className="font-bold text-base md:text-lg"><Link to="/">Home</Link></li>
          <li className="font-bold text-base md:text-lg"><Link to="/about">About</Link></li>
          <li className="relative group">
            <span className="font-bold text-base md:text-lg cursor-pointer">
              Offering
            </span>
            <ul className="absolute hidden bg-white p-4 space-y-2 border rounded-md group-hover:block w-[20vw] left-0">
              <li className="text-base">
                <Link to="/mentorConnect" className="block px-4 py-2 hover:bg-gray-400">Mentor Connect</Link>
              </li>
              <li className="text-base">
                <Link to="/investorconnect" className="block px-4 py-2 hover:bg-gray-400">Investor Connect</Link>
              </li>
              <li className="text-base">
                <Link   to="/grantsconnect" className="block px-4 py-2 hover:bg-gray-400">Grant Connect</Link>
              </li>
            </ul>
          </li>
          <li className="font-bold text-base md:text-lg"><Link to="/grwothservice">Services</Link></li>
          <li className="font-bold text-base md:text-lg"><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="bg-black text-white py-2 px-4 rounded-full">
          <Link to="/registration">Join Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;