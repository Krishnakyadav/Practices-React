import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("logInUser")) || [];
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("logInUser");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <p>Email:{user.email}</p>
      <p>Phone:{user.phone}</p>
      <p>Department:{user.department}</p>
      <p>Salary:{user.salary}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
