import React from "react";
import Login from "./Login";
import styles from "./test.module.css";
const testFixed = () => {
  const tmp = false;
  return (
    <div>
      <div onClick={() => (tmp = !tmp)}> test</div>
      {true && <Login></Login>}
    </div>
  );
};

export default testFixed;
