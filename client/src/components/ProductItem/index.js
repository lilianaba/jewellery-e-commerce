import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import './style.css';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        quantity: parseInt(itemInCart.quantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        quantity: parseInt(itemInCart.quantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        orderItem: { _id, product: item, quantity: 1, unit_price: price },
      });
      idbPromise("cart", "put", {
        _id,
        product: item,
        quantity: 1,
        unit_price: price,
      });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <LazyLoadImage alt={name} src={`/images/${image}`} effect="blur"/>
      </Link>
      <Link to={`/products/${_id}`}>
        <p>{name}</p>
      </Link>
      <div className="stockPrice">
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
