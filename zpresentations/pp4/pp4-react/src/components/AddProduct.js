import { useState } from "react";
import AddApparelForm from "./AddApparelForm";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const apparel = { name, category, description, price };

    fetch("http://localhost:8080/apparels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apparel),
    }).then(() => {
      console.log("New Apparel Added!");
    });

    handleClear();
  };

  const handleClear = () => {
    setName("");
    setCategory("");
    setDescription("");
    setPrice(0);
  };

  return (
    <div className="add-product py-28">
      <AddApparelForm
        name={name}
        category={category}
        description={description}
        price={price}
        setName={setName}
        setCategory={setCategory}
        setDescription={setDescription}
        setPrice={setPrice}
        handleClear={handleClear}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddProduct;
