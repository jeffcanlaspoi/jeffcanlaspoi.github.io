import Card from "./Card";
import Tshirt from "../assets/images/tshirt.jpg";
import Tarp from "../assets/images/tarp.jpg";
import Mugs from "../assets/images/mugs.jpg";
import Sintra from "../assets/images/sintra.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Featured = () => {
  const featured = [
    {
      id: "1",
      name: "Full Sublimation",
      category: "T-shirts Printing",
      description: "Comfortable wear with a full sublimation design",
      price: 999,
      image: Tshirt,
    },
    {
      id: "2",
      name: "Tarpaulin",
      category: "Tarpaulin Printing",
      description: "Tarpaulin for any size and occasion.",
      price: "(Varies depend on size)",
      image: Tarp,
    },
    {
      id: "3",
      name: "Mugs",
      category: "Mugs Printing",
      description: "Cutomized print for mugs",
      price: 199,
      image: Mugs,
    },
    {
      id: "4",
      name: "Sitraboard",
      category: "Sintraboard",
      description:
        "Display your special pictures in a fashionable way",
      price: 299,
      image: Sintra,
    },
  ];

  return (
    <div className="featured py-20 px-10 bg-[#BDE9C9]">
      <h1 className="text-6xl text-[#3c7e3a] font-bold text-center">
        SERVICES OFFERED
      </h1>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featured.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <Link to="/" className="mt-5 py-5 px-10 bg-[#2A5828] text-white rounded-full">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Featured;
