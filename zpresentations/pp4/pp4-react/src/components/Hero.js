import Cover from "../assets/images/braice-cover-1.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="px-10 w-full h-screen relative">
        <img src={Cover} alt="Cover" className="w-full h-full object-cover"/>
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
            <button className="mb-10 mr-52"> Shop Now </button>
            <button className="mr-52"> Avail Services </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
