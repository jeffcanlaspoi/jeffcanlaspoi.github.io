import ApparelList from "./ApparelList";
import Footer from "./Footer";
import useFetch from "./useFetch";

const Shop = () => {
  const { data: apparel, isLoading, error } = useFetch('http://localhost:8080/apparels');

  return (
    <>
    <div className="shop py-20 px-10">
      {apparel && <ApparelList apparelItems={apparel}/>}
    </div>
    <Footer />
    </>
    
  );
}
 
export default Shop;