const AddApparelForm = ({
  name,
  category,
  description,
  price,
  setName,
  setCategory,
  setDescription,
  setPrice,
  handleClear,
  handleSubmit,
}) => {
  return (
    <div className="w-[50%] mx-auto flex flex-col">
      <h1 className="text-center font-extrabold pb-10 text-lime-700 text-3xl">
        Add Apparel
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-10 border-2 border-lime-500 rounded-lg"
      >
        <label>Name</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 p-2 rounded-lg"
        />
        <label className="pt-5">Category</label>
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 p-2 rounded-lg"
        >
          <option value="Accessories"></option>
          <option value="T-shirts">T-shirts</option>
          <option value="Jackets">Jacket</option>
          <option value="Sweatshirts">Sweatshirts</option>
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Pants">Pants</option>
          <option value="Shoes">Shoes</option>
        </select>
        <label className="pt-5">Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2  p-2 rounded-lg"
        ></textarea>
        <label className="pt-5">Price</label>
        <input
          required
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border-2  p-2 rounded-lg"
        />
        <div className="flex justify-center pt-10">
          <button
            type="submit"
            className="mr-5 p-5 bg-lime-500 rounded-full font-bold"
          >
            Add Apparel
          </button>
          <button
            onClick={handleClear}
            className="py-5 px-10 bg-red-500 rounded-full font-bold"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApparelForm;
