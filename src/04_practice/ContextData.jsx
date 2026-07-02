import React, { createContext, useState } from "react";
export const formData = createContext();
const ContextData = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [allUser, setAllUser] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("users"));
    return saved ? saved : [];
  });

  const handleName = (e) => {
    const value =e.target.value;
    if(value.includes("@")){
      alert("Name cannot containt @")
      return;
    }
    setName(value)
  };
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      alert("All Field is Require");
      return;
    }

    const isExist = allUser.some(
      (ele) => ele.email.toLowerCase() === email.toLowerCase(),
    );
    if (isExist) {
      alert("User Already Exist");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    const user = { id: Date.now(), name, email, phone, password };
    console.log(user);
    const updated = [...allUser, user];
    setAllUser(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  const handleDelete = (id) => {
    const updatedDelete = [...allUser];
    const filterDelete = updatedDelete.filter((ele) => ele.id !== id);
    setAllUser(filterDelete);
    localStorage.setItem("users", JSON.stringify(filterDelete));
  };

  return (
    <formData.Provider
      value={{
        name,
        email,
        password,
        allUser,
        phone,
        search,
        handleName,
        handleEmail,
        handlePhone,
        handlePassword,
        handleSearch,
        handleSubmit,
        handleDelete,
      }}
    >
      {props.children}
    </formData.Provider>
  );
};

export default ContextData;
