import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Inventory Management</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movements">Movements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-product">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-location">Add Location</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-movement">Add Movement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/report">Report</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
