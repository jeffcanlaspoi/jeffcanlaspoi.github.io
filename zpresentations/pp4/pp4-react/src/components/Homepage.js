import Featured from "./Featured";
import Services from "./Services";
import Footer from "./Footer";
import Hero from "./Hero";


const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Featured />
      <Services />
      <Footer />
    </div>
  );
}
 
export default Homepage;