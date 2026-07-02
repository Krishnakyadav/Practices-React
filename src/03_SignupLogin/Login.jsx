import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("users"))

       if (user && user.email === email && user.password === password) {
      alert("Login Successful!");
    } else {
      alert("Invalid credentials");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
