import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReportGrid.css';

const ReportGrid = () => {
  const [locationBalances, setLocationBalances] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/report')
      .then(response => {
        setLocationBalances(response.data);
      })
      .catch(error => {
        console.error('Error fetching location balances:', error);
      });
  }, []);

  return (
    <div className="report-grid-container">
      <h2>Product Balance in Each Location</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Location</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {locationBalances.map(balance => (
            <tr key={balance.id}>
              <td>{balance.product}</td>
              <td>{balance.location}</td>
              <td>{balance.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportGrid;
