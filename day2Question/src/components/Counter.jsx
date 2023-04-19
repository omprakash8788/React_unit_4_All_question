import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   const incrementCount = () => {
  //     // Update state with incremented value
  //     setCount(count + 1);
  //   };

  const Add = () => {
    setCount(count + 1);
  };
  const Sub = () => {
    setCount(count - 1);
  };
  const Dob = () => {
    setCount(count * 2);
  };

  return (
    <div>
        <h2 data-testid = "counter-header">Counter</h2>
      <button onClick={Add} data-testid="add-btn">
        +
      </button>
      <button onClick={Sub} data-testid="subtract-btn">
        -
      </button>
      <button onClick={Dob} data-testid="double-btn">
        Double
      </button>
      <h3 data-testid="count">{count}</h3>
   
    </div>
  );
};

export default Counter;
