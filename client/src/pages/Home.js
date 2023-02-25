import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="homeDiv">
      <Banner />
      <div className="container">
        <CategoryMenu />

        <Cart />
      </div>
    </div>
  );
};

export default Home;
