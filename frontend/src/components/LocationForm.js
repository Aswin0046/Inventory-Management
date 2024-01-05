import React, { useState } from 'react';
import axios from 'axios';
import './LocationForm.css';
const LocationForm = ({ onLocationAdded }) => {
  const [locationName, setLocationName] = useState('');

  const handleLocationSubmit = () => {
    axios.post('http://localhost:5000/api/locations', {
      name: locationName,
    })
      .then(response => {
        console.log('Location added successfully:', response.data);
        onLocationAdded();
        setLocationName('');
      })
      .catch(error => {
        console.error('Error adding location:', error);
      });
  };

  return (
    <div className="location-form-container">
      <h2>Add Location</h2>
      <form>
        <div className="form-group">
          <label>Location Name:</label>
          <input type="text" className="form-control" value={locationName} onChange={(e) => setLocationName(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLocationSubmit}>Add Location</button>
      </form>
    </div>
  );
};

export default LocationForm;
