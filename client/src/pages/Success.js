import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      //      const products = cart.map((item) => item._id);

      if (cart.length) {
        const { data } = await addOrder({ variables: { orderItems: cart } });
        const orderItemData = data.addOrder.orderItems;

        orderItemData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="successDiv">
      <Jumbotron>
        <h2>Success!</h2>
        <h3>Thank you for your purchase!</h3>
        <h3>You will now be redirected to the home page</h3>
      </Jumbotron>
    </div>
  );
}

export default Success;
