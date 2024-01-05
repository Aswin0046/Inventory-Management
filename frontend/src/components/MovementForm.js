import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovementForm.css'; 

const MovementForm = ({ onMovementAdded }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [locations, setLocations] = useState([]);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    axios.get('http://localhost:5000/api/locations')
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  const handleMovementSubmit = () => {
    axios.post('http://localhost:5000/api/movements', {
      product_id: selectedProduct,
      from_location: fromLocation,
      to_location: toLocation,
      qty: quantity,
    })
      .then(response => {
        console.log('Movement added successfully:', response.data);
        onMovementAdded();
        setSelectedProduct('');
        setFromLocation('');
        setToLocation('');
        setQuantity('');
      })
      .catch(error => {
        console.error('Error adding movement:', error);
      });
  };

  return (
    <div className="movement-form-container">
      <h2>Add Movement</h2>
      <form>
        <div className="form-group">
          <label>Product:</label>
          <select className="form-control" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>From Location:</label>
          <select className="form-control" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)}>
            <option value="">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>To Location:</label>
          <select className="form-control" value={toLocation} onChange={(e) => setToLocation(e.target.value)}>
            <option value="">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleMovementSubmit}>Add Movement</button>
      </form>
    </div>
  );
};

export default MovementForm;
