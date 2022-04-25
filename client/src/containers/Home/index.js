import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { loadProducts } from "../../store/actions/products";
import AddProduct from "./AddProduct";

function Home() {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch]);

  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-md-6 pe-4">
          {isLoading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>)}

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>

            <tbody>
              {products.map(({ name, quantity, price }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{quantity}</td>
                  <td>${price}</td></tr>
              ))}
            </tbody>
          </table>

        </div>


        <div className="col-md-6 ps-4">
          <AddProduct />
        </div>
      </div>

    </div>
  );
}

Home.propTypes = {};

export default Home;
