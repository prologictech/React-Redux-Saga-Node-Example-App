import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import { addProduct } from "../../store/actions/products";

function AddProduct() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({

  })

  // Fields
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // Clear Fields
  const clearFields = () => {
    setName('');
    setQuantity('')
    setPrice('')
  }

  // Validate Input
  const isInputValid = () => {
    const tempErrors = {};

    if (!name) {
      tempErrors['name'] = 'Name is Required'
    }

    if (!quantity) {
      tempErrors['quantity'] = 'Quantity is Required'
    }

    if (!price) {
      tempErrors['price'] = 'Price is Required'
    }
    setErrors({ ...tempErrors })

    return !Object.values(tempErrors).length;
  }

  // Submit Product
  const submitProduct = async (e) => {
    e.preventDefault();

    // Clear Errors
    setErrors({});

    if (!isInputValid()) {
      return;
    }

    setLoading(true)
    const success = dispatch(addProduct(name, quantity, price));

    if (success) {
      clearFields();
    }

    setLoading(false);
  }

  return (
    <div>
      <h4>Add New Product</h4>

      <form onSubmit={submitProduct}>
        <div className="input-group mt-3">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text" className="form-control" placeholder="Product Name" />
        </div>
        {!!errors.name && (
          <span className="text-danger">{errors.name}</span>)}

        <div className="input-group mt-3">
          <input
            value={quantity}
            onChange={e => setQuantity(e.target.value)} type="text" className="form-control" placeholder="Product Quantity" />
        </div>
        {!!errors.quantity && (
          <span className="text-danger">{errors.quantity}</span>)}

        <div className="input-group mt-3">
          <input
            value={price}
            onChange={e => setPrice(e.target.value)} type="text" className="form-control" placeholder="Product Price ($)" />
        </div>
        {!!errors.price && (
          <span className="text-danger">{errors.price}</span>)}

        {!loading ? (
          <div className="input-group mt-3">
            <input type="submit" className="form-control btn btn-primary" placeholder="Product Price ($)" />
          </div>) :

          (<div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>)}
      </form>

    </div>
  );
}

AddProduct.propTypes = {};

export default AddProduct;
