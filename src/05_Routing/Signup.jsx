import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    department: "",
    salary: "",
  });
  const [allFormData, setAllFormData] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("users"));
    return saved ? saved : [];
  });

  console.log(formData);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  console.log(allFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.department ||
      !formData.salary
    ) {
      alert("all field required");
      return;
    }

    const user = [...allFormData, formData];
    console.log(user);

    setAllFormData(user);
    localStorage.setItem("users", JSON.stringify(user));
    setFormData({
      username: "",
      email: "",
      password: "",
      phone: "",
      department: "",
      salary: "",
    });
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp Page</h1>
      <label htmlFor="username">UserName:</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter Your UserName"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="phone">PhoneNo:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter Your Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter Your password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="department">Department:</label>
      <input
        type="text"
        name="department"
        id="department"
        placeholder="Enter Your Department"
        value={formData.department}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="salary">Salary:</label>
      <input
        type="number"
        name="salary"
        id="salary"
        placeholder="Enter Your Salary "
        value={formData.salary}
        onChange={handleChange}
      />
      <br />
      <br />
      <button>SignUp</button>
    </form>
  );
};

export default Signup;
