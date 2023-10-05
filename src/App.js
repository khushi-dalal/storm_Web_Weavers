// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from "./components/auth";
import './App.css';
import EmployeeApp from './newEmployee.js';
import Dashboard from './dashboard.js';
import React from 'react';
import FirebaseComponent from './ReactToFlask';
import 'stream-http';
import 'https-browserify';
import 'util';
import 'assert';
import 'stream-browserify';
import 'browserify-zlib';
import Home from './home';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/employeeapp" element={<EmployeeApp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FirebaseComponent" element={<FirebaseComponent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/src/src/App" component={<App />} />
      </Routes>
    </div>
  );
}

export default App;
