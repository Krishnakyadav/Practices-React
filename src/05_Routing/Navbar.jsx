import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
