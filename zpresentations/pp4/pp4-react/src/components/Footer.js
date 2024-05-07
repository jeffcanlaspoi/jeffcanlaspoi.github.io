import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiCellphoneFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../assets/images/braice-logo.jpg";

const Footer = () => {
  return (
    <div className="footer w-full h-3/4 bg-[#28572A] text-white">
      <div className="grid md:grid-cols-3 p-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <img src={Logo} alt="logo" className="w-20 object-contain" />
            <p>PRINTS WITH STYLE</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-5">Address</h3>
            <p>Vicentillo Ext., Brgy. P. I. Garcia</p>
            <p>Naval, Biliran</p>
            <p>6560, Philippines</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-5">NAVIGATE</h3>
          <ul>
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="mb-2">
              <Link to="/add-product">Add Product</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-5">Contact</h3>
          <div className="flex items-center gap-2">
            <CgMail />
            <a href="">braiceprintingshop@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <RiCellphoneFill />
            <p>09123456789</p>
          </div>

          <h3 className="font-bold text-2xl my-5">Social</h3>
          <div className="flex gap-4">
            <a href="">
              <FaFacebook size={50} />
            </a>
            <a href="">
              <RiInstagramFill  size={50} />
            </a>
            <a href="">
              <BiLogoGmail  size={50} />
            </a>
            <a href="">
              <FaLinkedin  size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
