import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        quantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, quantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row" id="cart-item">
      <div>
        <LazyLoadImage
          src={`/images/${item.product.image}`}
          alt={`${item.product.name}`}
        />
      </div>
      <div>
        <div>Product: {item.product.name}</div>
        <div>Unit Price: ${item.product.price}</div>
        <div>
          <span>Qty:</span>
          <input
            id="quantity"
            type="number"
            placeholder="1"
            value={item.quantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
