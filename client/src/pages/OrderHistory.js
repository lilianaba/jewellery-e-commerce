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
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
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
