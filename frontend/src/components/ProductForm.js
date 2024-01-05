import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css'; 

const ProductForm = ({ onProductAdded }) => {
  const [productName, setProductName] = useState('');

  const handleProductSubmit = () => {
    axios.post('http://localhost:5000/api/products', {
      name: productName,
    })
      .then(response => {
        console.log('Product added successfully:', response.data);
        onProductAdded();
        setProductName('');
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="product-form-container">
      <h2>Add Product</h2>
      <form>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleProductSubmit}>Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
