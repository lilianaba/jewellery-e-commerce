import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  return (
    <div>
      <h2>Choose a Category:</h2>
      <div className="categories">
        {categories.map((item) => (
          <div className="card px-1 py-1" key={item._id}>
            <Link to={`/category/${item._id}`}>
              <LazyLoadImage alt={item.name} src={`/images/${item.image}`} />
            </Link>
            <Link to={`/category/${item._id}`}>
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
