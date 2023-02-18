import React from "react";
// import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
    <div className="container">
     
      <CategoryMenu />

      <Cart />
    </div>
    <Footer />
    </div>
  );
};

export default Home;
