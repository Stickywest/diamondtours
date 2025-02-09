// src/pages/LoginPage.tsx
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [resetEmailSent, setResetEmailSent] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetEmailSent(true);
      setError("");
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md mt-16 rounded-md">
      <h2 className="text-2xl font-semibold text-center">Login</h2>

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

      {error && <div className="mt-4 text-red-600">{error}</div>}

      <button
        onClick={handleLogin}
        className="mt-6 w-full p-2 bg-[#C56D00] text-white rounded"
      >
        Login
      </button>

      <div className="mt-6 text-center">
        <p className="text-sm">Forgot your password?</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
        <button
          onClick={handlePasswordReset}
          className="mt-2 w-full p-2 bg-[#105A89] text-white rounded"
        >
          Send Reset Email
        </button>
        {resetEmailSent && <p className="mt-2 text-green-600">Reset email sent successfully.</p>}
      </div>
    </div>
  );
};

export default LoginPage;
