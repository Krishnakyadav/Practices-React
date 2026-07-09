import React, { useReducer } from "react";

const initialState = 0;
function reducer(state, action) {
    console.log(action)
  switch (action.type) {
    case "incre":
      return state + action.payload;
    case "decre":
      return state - action.payload >=0 ?state-action.payload:0
    case "reset":
      return (state = 0);
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch({ type: "incre", payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decre", payload: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;
