import React, { useState } from "react";

const ShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <h2>Show / Hide Password</h2>
      <input
        type={showPassword ? "text" : "Password"}
        placeholder="Enter Password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
