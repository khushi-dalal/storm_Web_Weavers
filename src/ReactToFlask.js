// Assuming this is a React component file (e.g., FirebaseComponent.js)
import React, { useEffect } from 'react';
import axios from 'axios';

// Your axios instance configuration...
const instance = axios.create({
  // Configurations if needed...
});

const FirebaseComponent = () => {
  useEffect(() => {
    // Your Firebase data
    const firebaseData = {
      key1: 'value1',
      key2: 'value2',
      // Add more data as needed
    };

    // Make a POST request to local Flask server
    axios.post('http://localhost:5000', firebaseData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error sending data to Flask:', error);
      });
  }, []); // Run once when the component mounts

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default FirebaseComponent;
