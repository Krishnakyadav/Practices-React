import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [add,setAdd] = useState(0);
    const handleChange=()=>{
        setAdd((prev)=>prev+1)
    }
  return (
    <div>
      <h1>Counter:{add} </h1>
      <button onClick={handleChange}>increment</button>
      <Child data={{fname:"krishna"}}/>
    </div>
  );
};

export default Parent;
