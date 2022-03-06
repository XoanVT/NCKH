import React from "react";
import nopage from "../images/nopage.jpg";
import styles from "./page.module.css";
const NoPage = () => {
  return (
    <div>
      <img className={styles.image__nopage} src={nopage} />
    </div>
  );
};

export default NoPage;
