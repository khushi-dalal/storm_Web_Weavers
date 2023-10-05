// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmployeeApp from './EmployeeApp'; // Ensure correct path
import Dashboard from './dashboard';
import Home from './home';

const AppRoutes = () => (
  <Routes>
    {/* Other routes */}
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/employeeapp" element={<EmployeeApp />} />
    <Route path="/home" element={<Home />} />
    <Route path="/src/src/App" component={<App />} />
  </Routes>
);

export default AppRoutes;
