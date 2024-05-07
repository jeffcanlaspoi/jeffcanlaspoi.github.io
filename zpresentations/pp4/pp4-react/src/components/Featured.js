import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "./Card";

const Featured = () => {
  const featured = [
    {
      id: "1",
      name: "Cotton T-shirt",
      category: "T-shirts",
      description: "Comfortable cotton T-shirt for everyday wear.",
      price: 999,
      image:
        "https://resources.mandmdirect.com/Images/_default/s/h/3/sh30068_1_cloudzoom.jpg",
    },
    {
      id: "2",
      name: "Slim Fit Jeans",
      category: "Jeans",
      description: "Stylish slim fit jeans made from stretch denim.",
      price: 2499,
      image:
        "https://dynamic.zacdn.com/6kE95LednVTdQVVuP2qDjhxw6yI=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/diverse-9750-6417792-1.jpg",
    },
    {
      id: "3",
      name: "Hooded Sweatshirt",
      category: "Sweatshirts",
      description: "Warm hooded sweatshirt with kangaroo pocket.",
      price: 1299,
      image:
        "https://i5.walmartimages.com/seo/Hanes-Men-s-and-Big-Men-s-Ultimate-Cotton-Heavyweight-Sweatshirt-Sizes-S-3XL_8bc0df6e-4dfc-4ebe-8dd3-b018c3d34dff_1.7a642f19181b641e970a025a4a2a7844.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF",
    },
    {
      id: "4",
      name: "Sports Shoes",
      category: "Shoes",
      description: "Comfortable sports shoes with cushioned sole.",
      price: 2999,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/379442/02/fnd/ARE/fmt/png/",
    },
  ];

  return (
    <div className="featured my-16 px-10">
      <h1 className="text-6xl text-[#3c7e3a] font-bold text-center">APPARELS</h1>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featured.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <Link to="/shop" className="mt-5 py-5 px-10 bg-[#2A5828] text-white rounded-full">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Featured;
