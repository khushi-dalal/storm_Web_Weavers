// Auth.js
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const navigate = useNavigate();

  const isValidCompanyCode = () => {
    const validCompanyCode = "ABC123";
    return companyCode === validCompanyCode;
  };

  const signIn = async () => {
    try {
      if (!isValidCompanyCode()) {
        console.error("Invalid company code");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      if (!isValidCompanyCode()) {
        console.error("Invalid company code");
        return;
      }

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User ID:", user.uid);
      console.log("Display Name:", user.displayName);
      console.log("Email:", user.email);

      // Use React Router to navigate to the employee page
      navigate('/Dashboard'); // Use navigate instead of window.location.assign
    } catch (error) {
      console.error("Firebase authentication error:", error);
    }
  };


  const logout = async () => {
    try {
      await signOut(auth);
      const currentUser = auth.currentUser;
      console.log("Current user after logout:", currentUser);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#388186" }}>
      <div className="card p-4 shadow rounded" style={{ width: "500px", backgroundColor: "#A5E9E1" }}>
        <h2 className="text-center mb-4" style={{ color: "#2E2B2B" }}>Login</h2>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            placeholder="Email..."
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: "#FDF6F6" }}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            placeholder="Password..."
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: "#FDF6F6" }}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            placeholder="Company Code..."
            onChange={(e) => setCompanyCode(e.target.value)}
            style={{ backgroundColor: "#FDF6F6" }}
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            type="button"
            className="btn btn-primary btn-lg me-md-2"
            style={{ backgroundColor: "#388186", color: "#FDF6F6", border: "none", cursor: "pointer", transition: "transform 0.2s" }}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </button>
          <button
            className="btn btn-primary btn-lg me-md-2"
            style={{ backgroundColor: "#388186", color: "#FDF6F6", border: "none", cursor: "pointer", transition: "transform 0.2s" }}
            onClick={signIn}
          >
            Sign In
          </button>
          <button
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: "#388186", color: "#FDF6F6", border: "none", cursor: "pointer", transition: "transform 0.2s" }}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
