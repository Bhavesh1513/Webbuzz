import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));

    if (storedCredentials) {
      const { email: storedEmail, password: storedPassword } = storedCredentials;

      if (storedEmail === email && storedPassword === password) {
        navigate("/upcomingmatches");
      } 
      else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-[400px]">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">Login</h2>
        <div className="flex flex-col gap-5 mb-5">
          <label className="text-richblack-900 font-semibold text-xl">Email:</label>
          <input
            type="email"
            className="outline-none text-xl border-b-2 border-b-[#0000ff] pb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label className="text-richblack-900 font-semibold text-xl">Password:</label>
          <input
            type="password"
            className="outline-none text-xl border-b-2 border-b-[#0000ff] pb-4"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-[#0000ff] text-richwhite-1 py-2 px-8 rounded-md transition duration-300 hover:bg-blue-700 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
