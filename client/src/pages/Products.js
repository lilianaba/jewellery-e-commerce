import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Products = () => {
  const [state, dispatch] = useStoreContext();

  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  }, []);

  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  );
};

export default Products;
