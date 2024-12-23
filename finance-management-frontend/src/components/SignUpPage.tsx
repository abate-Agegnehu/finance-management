import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      await API.post("/auth/register", { username, email, password });
      navigate("/login");
    } catch (err) {
      alert("Sign Up Failed");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl">Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block my-2 border p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block my-2 border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block my-2 border p-2"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="block my-2 border p-2"
      />
      <button
        onClick={handleSignUp}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
