// src/pages/UserProfilePage.tsx
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { onAuthStateChanged, updateEmail, updatePassword } from "firebase/auth";

const UserProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email || "");
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleEmailUpdate = async () => {
    try {
      if (newEmail) {
        await updateEmail(user, newEmail);
        setMessage("Email updated successfully.");
        setEmail(newEmail);
      }
    } catch (err) {
      setMessage("Failed to update email.");
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      if (newPassword) {
        await updatePassword(user, newPassword);
        setMessage("Password updated successfully.");
      }
    } catch (err) {
      setMessage("Failed to update password.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center">User Profile</h2>
      <div className="mt-4">
        <label className="block text-lg">Email</label>
        <input
          type="email"
          value={email}
          readOnly
          className="w-full p-2 mt-2 border rounded bg-gray-100"
        />
      </div>

      <div className="mt-4">
        <label className="block text-lg">Update Email</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Enter new email"
          className="w-full p-2 mt-2 border rounded"
        />
        <button
          onClick={handleEmailUpdate}
          className="mt-2 w-full p-2 bg-[#105A89] text-white rounded"
        >
          Update Email
        </button>
      </div>

      <div className="mt-4">
        <label className="block text-lg">Update Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="w-full p-2 mt-2 border rounded"
        />
        <button
          onClick={handlePasswordUpdate}
          className="mt-2 w-full p-2 bg-[#105A89] text-white rounded"
        >
          Update Password
        </button>
      </div>

      {message && <div className="mt-4 text-green-600">{message}</div>}
    </div>
  );
};

export default UserProfilePage;
