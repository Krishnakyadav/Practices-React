import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Option");

  const options = ["React", "JavaScript", "Node", "MongoDB"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div style={{ width: "200px", margin: "50px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "1px solid black",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {selected}
      </div>

      {open && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            border: "1px solid black",
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #ddd",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;