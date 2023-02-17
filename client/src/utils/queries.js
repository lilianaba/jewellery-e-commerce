import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      material 
      size 
      gemstone
      cut
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($orderItems: [OrderItemInput]!) {
    checkout(orderItems: $orderItems) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      image
      price
      quantity
      material 
      size 
      gemstone
      cut
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      image
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      address
      phone
      orders {
        _id
        purchaseDate
        orderItems {
          _id
          unit_price
          quantity
          product {
            _id
            name
            description
            price
            quantity
            image
          }
        }
      }
    }
  }
`;
