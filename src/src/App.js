import React, { useState } from "react";
import Question from "./question";
import 'bootstrap/dist/css/bootstrap.css';
import Dataset from "./Dataset";


function App() {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    feedback: '',
    empFName: '',
    empLName: '',
    designation: '',
    points: 0,
  });

  const handleCheckBoxChange = (checkBoxName) => {
    const points = Question.addPoints(checkBoxName, employeeData, setEmployeeData);
    console.log(`Points for ${checkBoxName}: ${points}`);
  };
  
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, feedback, empFName, empLName, designation } = employeeData;

    if (firstName && lastName && feedback && empFName && empLName && designation) {
      const res = await fetch('https://stormfeedback-64271-default-rtdb.firebaseio.com/employeeDatabase.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName, lastName, feedback, empFName, empLName, designation,
        }),
      });

      if (res.ok) {
        setEmployeeData({
          firstName: '',
          lastName: '',
          feedback: '',
          empFName: '',
          empLName: '',
          designation: '',
        });
        alert("Data Stored");
      } else {
        alert("Error");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  function postData(event) {
    const name = event.target.name;
    const value = event.target.value;

    setEmployeeData({ ...employeeData, [name]: value });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#5CD2E6' }}>
      <div className="card" style={{ width: '35%' }}>
        <div className="card-body">
          <form className="form" onSubmit={submitData}>
            <h1 className="mb-4">Feedback Form</h1>

            <div className="row mb-3">
              <div className="col">
                <label>First Name</label>
                <input
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  value={employeeData.firstName}
                  onChange={postData}
                />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  value={employeeData.lastName}
                  onChange={postData}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label>Employee First Name</label>
              <input
                className="form-control"
                name="empFName"
                placeholder="Name"
                value={employeeData.empFName}
                onChange={postData}
              />
            </div>

            <div className="mb-3">
              <label>Employee Last Name</label>
              <input
                className="form-control"
                name="empLName"
                placeholder="Name"
                value={employeeData.empLName}
                onChange={postData}
              />
            </div>

            <div className="mb-3">
              <label>Role of Employee</label>
              <input
                className="form-control"
                name="designation"
                placeholder="Role Name"
                value={employeeData.designation}
                onChange={postData}
              />
            </div>

            <Question />

            <div className="mb-3">
              <label>Feedback</label>
              <textarea
                className="form-control"
                name="feedback"
                placeholder="Write your text here"
                value={employeeData.feedback}
                onChange={postData}
              />
            </div>

            <button type="submit" className="btn btn-info">Submit</button>
          </form>

          <leaderboard />
        </div>
      </div>
    </div>
  );

  const submitData2 = async (event) => {
    event.preventDefault();
    const { firstName, lastName, feedback, empFName, empLName, designation } = employeeData;
  
    if (firstName && lastName && feedback && empFName && empLName && designation) {
      try {
        // Create an object with the feedback data to send to the Flask server
        const dataToSend = {
          firstName,
          lastName,
          feedback,
          empFName,
          empLName,
          designation,
        };
  
        const response = await fetch('/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });
  
        if (response.ok) {
          setEmployeeData({
            firstName: '',
            lastName: '',
            feedback: '',
            empFName: '',
            empLName: '',
            designation: '',
          });
          alert('Data Stored');
        } else {
          alert('Error');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting data.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };
  
}

export default App;
