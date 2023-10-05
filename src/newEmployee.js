import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { db, auth } from "./config/firebase";
import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth"; // Import signOut

function EmployeeApp() {
  const [employeeList, setEmployeeList] = useState([]);
  const employeeCollectionRef = collection(db, "Employees");
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeeDepartment, setNewEmployeeDepartment] = useState("");
  const [newEmployeeSurname, setNewEmployeeSurname] = useState("");
  const [newEmployeeTitle, setNewEmployeeTitle] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");

  const navigate = useNavigate();  // Declare navigate using useNavigate

  const getEmployeeList = async () => {
    try {
      const data = await getDocs(employeeCollectionRef);
      const employeeData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmployeeList(employeeData);
      console.log(employeeData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEmployeeList(); // Assuming getEmployeeList is defined somewhere in your code
  }, [getEmployeeList]);

  const onSubmitEmployee = async () => {
    try {
      await addDoc(employeeCollectionRef, {
        Name: newEmployeeName,
        Surname: newEmployeeSurname,
        Department: newEmployeeDepartment,
        Title: newEmployeeTitle,
        Id: auth?.currentUser?.uid,
      });
      getEmployeeList();
  
      // Redirect to a different route after successful submission
      navigate('/employeeapp');
    } catch (err) {
      console.error(err);
    }
  };
  

  const deleteEmployee = async (id) => {
    const employeeDoc = doc(db, "Employees", id);
    await deleteDoc(employeeDoc);
    getEmployeeList(); // Refresh the employee list after deletion
  };

  const updateEmployeeTitle = async (id) => {
    try {
      // Assuming you have a variable for the updated title, let's call it updatedTitle
      const employeeDoc = doc(db, "Employees", id);
      await updateDoc(employeeDoc, { Title: updatedTitle });
      getEmployeeList(); // Refresh the employee list after update
    } catch (err) {
      console.error(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      // Redirect to the login page after logout
      navigate('/auth');
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  return (
    <div className="employeeApp">
      <div>
        <input
          placeholder="Employee Name..."
          onChange={(e) => setNewEmployeeName(e.target.value)}
        />
        <input
          placeholder="Employee Surname..."
          onChange={(e) => setNewEmployeeSurname(e.target.value)}
        />
        <input
          placeholder="Employee Department..."
          onChange={(e) => setNewEmployeeDepartment(e.target.value)}
        />
        <input
          placeholder="Employee Title..."
          onChange={(e) => setNewEmployeeTitle(e.target.value)}
        />
        <button onClick={onSubmitEmployee}>Submit</button>
      </div>
      <div className="employeeApp">
      <button onClick={logout}>Logout</button>
      {/* Rest of your code */}
    </div>
      <div>
        {employeeList.map((employee) => (
          <div key={employee.id}>
            <h1>Name: {employee.Name} {employee.Surname}</h1>
            <h1>Title: {employee.Title}</h1>
            <h1>Description: {employee.Department}</h1>
            <button onClick={() => deleteEmployee(employee.id)}> Delete Employee</button>
            <input
              placeholder="new title..."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateEmployeeTitle(employee.id)}>
              {" "}
              Update Title
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeApp;
