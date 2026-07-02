import React from "react";
import { useContext } from "react";
import { formData } from "./ContextData";
const CreateForm = () => {
  const {
    name,
    email,
    password,
    phone,
    handleName,
    handleEmail,
    handlePassword,
    handleSubmit,
    handlePhone
  } = useContext(formData);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={handleName}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={handleEmail}
      />
      <br />
      <br />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" placeholder="Enter Phone Number"  value={phone} onChange={handlePhone}/> <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={handlePassword}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateForm;
