import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
console.log("Users",users)
console.log("Login",login)

    const user = users.find(
      (item) =>
        item.email === login.email && item.password === login.password,
    );
    console.log("user find",user);
    if (user) {
      localStorage.setItem("logInUser",JSON.stringify(user))
      alert("Login Sucessfully");
      navigate("/dashboard")
    } else {
      alert("invaild username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter Your Email"
        name="email"
        value={login.email}
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Your password"
        name="password"
        value={login.password}
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      <button>Login</button>
    </form>
  );
};

export default Login;
