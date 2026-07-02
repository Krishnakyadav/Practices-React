import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user={name,email,password};
    localStorage.setItem("users",JSON.stringify(user));
    console.log(user);

    alert("Signup SucessFully");
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button>SignUp</button>
    </form>
  );
};

export default Signup;
