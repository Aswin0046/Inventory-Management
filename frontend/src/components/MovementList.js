import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovementList.css'; 

const MovementList = () => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movements')
      .then(response => {
        setMovements(response.data);
      })
      .catch(error => {
        console.error('Error fetching movements:', error);
      });
  }, []);

  return (
    <div className="movement-list-container">
      <h2>Movement List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>From Location</th>
            <th>To Location</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {movements.map(movement => (
            <tr key={movement.id}>
              <td>{movement.product.name}</td>
              <td>{movement.from_location.name}</td>
              <td>{movement.to_location.name}</td>
              <td>{movement.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovementList;
