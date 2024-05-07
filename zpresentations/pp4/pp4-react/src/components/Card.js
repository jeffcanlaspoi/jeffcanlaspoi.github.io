const Card = ({ item }) => {
  return (
    <div className="card bg-green-700 shadow-lg rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 p-1"
      />
      <div className="p-6 text-white">
        <h3 className="text-lg font-semibold">{item.category}</h3>
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <p className="italic">{item.description}</p>
        <p className="font-semibold">Php {item.price}</p>
      </div>
    </div>
  );
};

export default Card;
