// src/pages/SignUpPage.tsx
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to homepage after successful signup
    } catch (err) {
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-16 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

      <div className="mt-4">
        <label htmlFor="email" className="block text-lg">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mt-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="password" className="block text-lg">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-2 mt-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="confirmPassword" className="block text-lg">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full p-2 mt-2 border rounded"
        />
      </div>

      {error && <div className="mt-4 text-red-600">{error}</div>}

      <button
        onClick={handleSignUp}
        className="mt-6 w-full p-2 bg-[#C56D00] text-white rounded"
      >
        Sign Up
      </button>

      <p className="mt-4 text-center">
        Already have an account? <a href="/login" className="text-[#105A89]">Login here</a>
      </p>
    </div>
  );
};

export default SignUpPage;
