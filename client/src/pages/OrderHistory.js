import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Home</Link>

        {user ? (
          <>
            <div id='user-info'>
              <h3>My Profile</h3>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p>Email Addres: {user.email}</p>
            </div>
            <h4>Order History</h4>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2" id="previous-order">
                <p>Purchase Date: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                <p>Purchased Items:</p>
                <div className="flex-row">
                  {order.orderItems.map(({ _id, unit_price, quantity, product }, index) => (
                    <div key={index} className="flex-row" id="order-item">
                      <div id="order-item-image">
                        <Link to={`/products/${_id}`}>
                          <img alt={product.name} src={`/images/${product.image}`} />
                        </Link>
                      </div>
                      <div id="order-item-text">
                        <p>{product.name}</p>
                        <p>Unit Price: ${unit_price}</p>
                        <p>Quantity: {quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
