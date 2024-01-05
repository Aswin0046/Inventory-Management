import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import LocationList from './components/LocationList';
import LocationForm from './components/LocationForm';
import MovementList from './components/MovementList';
import MovementForm from './components/MovementForm';
import Menu from './components/menu';
import FrontPage from './components/front';

const apiBaseUrl = 'http://localhost:5000/api';
const App = () => {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<ProductForm />} />
        <Route path="/locations" element={<LocationList />} />
        <Route path="/locations/add" element={<LocationForm />} />
        <Route path="/movements" element={<MovementList />} />
        <Route path="/movements/add" element={<MovementForm />} />
      </Routes>
    </Router>
  );
};

export default App;
