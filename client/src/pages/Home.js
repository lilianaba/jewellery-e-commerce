import React from "react";
// import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
    <div className="container">
     
      <CategoryMenu />

      <Cart />
    </div>

    </div>
  );
};

export default Home;
