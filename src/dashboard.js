import { Link } from 'react-router-dom';
import './leaderboard.css'; 
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { db, auth } from "./config/firebase";
import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth"; // Import signOut
//import Example from './chart';
import  LineChartInteractiveExample from './\chart';



const Dashboard = () => {
  const navigate = useNavigate();  // Declare navigate using useNavigate
  const logout = async () => {
    try {
      await signOut(auth);
      // Redirect to the login page after logout
      navigate('/auth');
    } catch (err) {
      console.error("Logout error:", err);
    }
  }

  const feedForm = async () => {
    try {
      navigate('/src/src/App');
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-light sidebar" style={{ backgroundColor: "#A5E9E1" }}>
          <h2 className="text-center my-4" style={{ color: "#2E2B2B" }}>Elevate</h2>
          <div className="list-group">
            <Link to="/dashboard/overview" className="list-group-item d-flex align-items-center" style={{ backgroundColor: "#FDF6F6", color: "#2E2B2B" }}>
              <i className="bi bi-house-door"></i> Overview
            </Link>
            <Link to="/dashboard/assignment" className="list-group-item d-flex align-items-center" style={{ backgroundColor: "#FDF6F6", color: "#2E2B2B" }}>
              <i className="bi bi-file-earmark-text"></i> Assignment
            </Link>
            <Link to="/dashboard/reports" className="list-group-item d-flex align-items-center" style={{ backgroundColor: "#FDF6F6", color: "#2E2B2B" }}>
              <i className="bi bi-file-earmark-bar-graph"></i> Reports
            </Link>
            <Link to="/dashboard/file-storage" className="list-group-item d-flex align-items-center" style={{ backgroundColor: "#FDF6F6", color: "#2E2B2B" }}>
              <i className="bi bi-folder"></i> File Storage
            </Link>
            <Link to="/dashboard/settings" className="list-group-item d-flex align-items-center" style={{ backgroundColor: "#FDF6F6", color: "#2E2B2B" }}>
              <i className="bi bi-gear"></i> Settings
            </Link>
          </div>
        </div>

        {/* Main Content */}
        
        <div className="col-md-9">
          <div className="d-flex justify-content-between mb-3">
            <h2 className="my-4" align-content= "center">Welcome to the Dashboard!</h2>
            
            <button
              onClick={feedForm}
              type="button"
              class="btn btn-success" style={{
                backgroundColor: "#388186",
                color: "#FDF6F6",
                fontSize: "14px",
                padding: "4px 10px",
                height: "30px",
                marginTop: "30px", // Add top margin
                marginRight: "0px"}
              }
            >I'd Like to Write  feedback</button>


            {/* Logout Button */}
            <button
            onClick={logout}
            className="btn btn-primary"
            style={{
              backgroundColor: "#388186",
              color: "#FDF6F6",
              fontSize: "14px",
              padding: "4px 10px",
              height: "30px",
              lineHeight: "1",
              marginTop: "30px", // Add top margin
              marginRight: "40px", // Add right margin
            }}
          >
            Logout
          </button>

          </div>
          {/* Cards */}
          <div className="row">
            {/* Overview Card */}
            <div className="col-md-3 mb-4">
              <div className="card">
                {/* <img src="overview-photo.jpg" className="card-img-top" alt="Overview" /> */}
                <div className="card-body">
                  <h5 className="card-title">Overview</h5>
                  <Link to="/dashboard/overview" className="btn btn-primary" style={{ backgroundColor: "#388186", color: "#FDF6F6" }}>Go to Overview</Link>
                </div>
              </div>
            </div>

            {/* Assignment Card */}
            <div className="col-md-3 mb-4">
              <div className="card">
                {/* <img src="assignment-photo.jpg" className="card-img-top" alt="Assignment" /> */}
                <div className="card-body">
                  <h5 className="card-title">Assignment</h5>
                  <Link to="/dashboard/assignment" className="btn btn-primary" style={{ backgroundColor: "#388186", color: "#FDF6F6" }}>Go to Assignment</Link>
                </div>
              </div>
            </div>

            {/* Reports Card */}
            <div className="col-md-3 mb-4">
              <div className="card">
                {/* <img src="reports-photo.jpg" className="card-img-top" alt="Reports" /> */}
                <div className="card-body">
                  <h5 className="card-title">Reports</h5>
                  <Link to="/dashboard/reports" className="btn btn-primary" style={{ backgroundColor: "#388186", color: "#FDF6F6" }}>Go to Reports</Link>
                </div>
              </div>
            </div>

            {/* File Storage Card */}
            <div className="col-md-3 mb-4">
              <div className="card">
                {/* <img src="file-storage-photo.jpg" className="card-img-top" alt="File Storage" /> */}
                <div className="card-body">
                  <h5 className="card-title">File Storage</h5>
                  <Link to="/dashboard/file-storage" className="btn btn-primary" style={{ backgroundColor: "#388186", color: "#FDF6F6" }}>Go to File Storage</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <div className="container leaderboard-container">
        <div className="leaderboard-header">Top Players of the Month</div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Player A</td>
              <td>320</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Player B</td>
              <td>280</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Player C</td>
              <td>250</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <LineChartInteractiveExample />
    </div>
  );
};

export default Dashboard;
