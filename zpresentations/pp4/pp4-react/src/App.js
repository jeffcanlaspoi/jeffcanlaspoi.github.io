import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Reviews from "./components/Reviews";
import AddProduct from "./components/AddProduct";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            {/* <Route path="/reviews">
              <Reviews />
            </Route> */}
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
