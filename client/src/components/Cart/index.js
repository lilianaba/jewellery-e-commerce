import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PK);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, orderItems: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.unit_price * item.quantity;
    });
    return sum.toFixed(2);
  }

  function itemTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  }

  function submitCheckout() {
    getCheckout({
      variables: { orderItems: state.cart },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          <i className="fa-solid fa-bag-shopping" id="shopping-bag">
            <span id="item-count">{itemTotal()}</span>
          </i>
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        <i className="far fa-window-close" id="close-icon"></i>
      </div>
      <h2>My Shopping Bag</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong id="total">Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button id="checkout-btn" onClick={submitCheckout}>
                Checkout
              </button>
            ) : (
              <span>(Please login/signup to checkout.)</span>
            )}
          </div>
        </div>
      ) : (
        <h5>
          Umm... the shopping bag is empty. Still thinking? Just add your
          favourite items to your shopping bag!
        </h5>
      )}
    </div>
  );
};

export default Cart;
