import React, { useState } from "react";
import ShowHidePassword from "./01_showhidepassword/ShowHidePassword";
import Dropdown from "./02_Dropdown/Dropdown";
// import Parent from './Context/Parent'
import Routing from "./03_SignupLogin/Routing";
import ControllerForm from "./04_practice/ControllerForm";
import ContextData from "./04_practice/ContextData";
import Routing2 from "./04_practice/Routing2";
import Routing3 from "./05_Routing/Routing3";
import LifeCycleInCBC from "./06_LifeCycle/LifeCycleInCBC";
import FetchProduct from "./07_practices2/FetchProduct";




const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
  return (
    <div>
      {/* <ShowHidePassword/> */}
      {/* <Dropdown/> */}
      {/* <Parent/> */}
      {/* <Routing/> */}
      {/* <ContextData>
        <ControllerForm />
      </ContextData> */}
      {/* <Routing2/> */}
      {/* <Routing3/> */}
      {/* <button onClick={handleToggle}>Toggle</button>
      {toggle && <LifeCycleInCBC />} */}
     <FetchProduct/>
     
    </div>
  );
};

export default App;
