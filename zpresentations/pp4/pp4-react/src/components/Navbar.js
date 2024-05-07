import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Logo from "../assets/images/braice-logo.jpg"
import { useState } from "react";


const Navbar = () => {
  const [navFlag, setNavFlag] = useState(false);

  return (
    <nav className="fixed w-full z-10 bg-[#2A5828] flex justify-between items-center h-20 px-5 md:px-10 lg:px-20 shadow-lg text-white">
      <div>
        <a href="#">
          <img src={Logo} alt="Logo" width="70"/>
        </a>
      </div>
      <ul className="hidden lg:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {/* <li>
          <Link to="/reviews">Reviews</Link>
        </li> */}
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className="hidden lg:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={() => setNavFlag(!navFlag)} className="lg:hidden z-10">
        {!navFlag ? (
          <HiOutlineMenuAlt4 size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`absolute ${
          navFlag ? "left-0" : "left-[100%]"
        } top-0 w-full bg-green-900/90 px-4 py-7 flex flex-col`}
      >
        <h1>BRAICE</h1>
        <ul>
          <li className="border-b">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="border-b">
            <Link to="/shop">Shop</Link>
          </li>
          {/* <li className="border-b">
            <Link to="/reviews">Reviews</Link>
          </li> */}
          <li className="border-b">
            <Link to="/add-product">Add Product</Link>
          </li>
          <li className="border-b">
            <Link to="/conatct-us">Contact Us</Link>
          </li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
