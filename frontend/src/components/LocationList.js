import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LocationList.css'; 

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/locations')
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  return (
    <div className="location-list-container">
      <h2>Location List</h2>
      <ul className="list-group">
        {locations.map(location => (
          <li key={location.id} className="list-group-item">{location.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
