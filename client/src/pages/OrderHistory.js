import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import Autocomplete from "react-google-autocomplete";

function OrderHistory() {
  const [formState, setFormState] = useState({ address: "", phone: "" });
  const [message, setMessage] = useState("");
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "network-only",
  });
  let user;

  if (data) {
    user = data.user;
  }

  useEffect(() => {
    if (data) {
      // const newformState = { address: user.address, phone: user.phone}
      setFormState({ ...formState, address: user.address, phone: user.phone });
    }
  }, [data]);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (formState.phone) {
      if (!formState.phone.match(phoneRegex)) {
        setMessage("Incorrect Phone Number Input.");
        return;
      }
    }

    try {
      const mutationResponse = await updateUser({
        variables: { address: formState.address, phone: formState.phone },
      });

      if (mutationResponse) {
        setMessage("Information updated successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Home</Link>

        {user ? (
          <>
            <div id="user-info">
              <h3>My Profile</h3>
              <p>
                Name: {user.firstName} {user.lastName}
              </p>
              <p>Email Addres: {user.email}</p>
              <form>
                <div>
                  <label htmlFor="address">Address:</label>
                  <Autocomplete
                    apiKey={process.env.REACT_APP_GOOGLE_API}
                    onPlaceSelected={(place) => {
                      setFormState({
                        ...formState,
                        address: place.formatted_address,
                      });
                    }}
                    options={{
                      types: ["address"],
                    }}
                    placeholder="Please input your address"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    defaultValue={user.address}
                  />
                </div>
                <div className="flex-row space-between my-2">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    placeholder="Please input your phone number"
                    name="phone"
                    type="text"
                    id="phone"
                    onChange={handleChange}
                    defaultValue={user.phone}
                  />
                </div>
                {error ? (
                  <div>
                    <p className="error-text">Information update failed.</p>
                  </div>
                ) : null}
                {message ? (
                  <div>
                    <p className="error-text">{message}</p>
                  </div>
                ) : null}
                <div className="flex-row flex-start">
                  <button type="button" onClick={handleProfileUpdate}>
                    Update
                  </button>
                </div>
              </form>
            </div>
            <h4>My Orders</h4>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2" id="previous-order">
                <p>
                  Purchase Date:{" "}
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </p>
                <p>Purchased Items:</p>
                <div className="flex-row">
                  {order.orderItems.map(
                    ({ _id, unit_price, quantity, product }, index) => (
                      <div key={index} className="flex-row" id="order-item">
                        <div id="order-item-image">
                          <Link to={`/products/${_id}`}>
                            <img
                              alt={product.name}
                              src={`/images/${product.image}`}
                            />
                          </Link>
                        </div>
                        <div id="order-item-text">
                          <p>{product.name}</p>
                          <p>Unit Price: ${unit_price}</p>
                          <p>Quantity: {quantity}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </>
        ) : !loading ? (
          <p>Session expired. Please login to access your profile.</p>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
