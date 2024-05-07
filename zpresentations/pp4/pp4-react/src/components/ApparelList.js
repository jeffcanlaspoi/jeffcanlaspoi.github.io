import Card from "./Card";

const ApparelList = ({ apparelItems }) => {
  return (
    <>
      <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {apparelItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ApparelList;
