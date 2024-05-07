import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

const ContactUs = () => {
  return (
      <div className="contact-us pt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1162.1034991859456!2d124.39798850029185!3d11.563707474043401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78cb83fe5d831%3A0x8f4d4e26d86e78c3!2sBraice%20Prints%20and%20Apparel!5e0!3m2!1sen!2sph!4v1715060239068!5m2!1sen!2sph"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
        <div className="bg-green-500/50 pb-10">
          <h1 className="text-center font-bold text-5xl text-green-700 pt-10">
            Get in touch with us!
          </h1>
          <div className="grid grid-cols-2">
            <div className="p-10">
              <h3 className="mb-5 font-semibold text-xl">Contact Us</h3>
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 rounded-md p-1 mb-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-2 rounded-md p-1 mb-3"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border-2 rounded-md p-1 mb-3"
                />
                <textarea
                  placeholder="Your Message"
                  className="border-2 rounded-md p-1 mb-3"
                ></textarea>
                <div>
                  <button className="text-start py-2 px-5 bg-green-600 rounded-full text-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="p-10">
              <h3 className="mb-5 font-semibold text-xl">Our Store</h3>
              <p>Vicentillo Ext., Brgy. Padre Inocentes Garcia</p>
              <p>Naval, Biliran</p>
              <p>6560, Philippines</p>

              <h3 className="font-semibold text-xl my-5">Social</h3>
              <div className="flex gap-4">
                <a href="" className="text-green-900">
                  <FaFacebook size={50} />
                </a>
                <a href="" className="text-green-900">
                  <RiInstagramFill size={50} />
                </a>
                <a href="" className="text-green-900">
                  <BiLogoGmail size={50} />
                </a>
                <a href="" className="text-green-900">
                  <FaLinkedin size={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;
