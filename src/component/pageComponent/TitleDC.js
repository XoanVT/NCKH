import React, { useEffect, useState } from "react";
import { get } from "../../data/methodFetch";
import styles from "./titleDC.module.css";
import PageTitle from "../pageComponent/bodyComponent/PageTitle";
import Cooli from "./bodyComponent/Cooli";
import Footer from "../global/Footer";
const TitleDC = () => {
  const [listProducts, setListPro] = useState([]);
  const data = (values) => {
    setListPro(values);
  };
  useEffect(() => {
    get(" http://localhost:3000/products", data);
  }, []);

  const title_des = {
    title: "Website template",
    description: " Hơn " + listProducts.length + " website template",
  };
  return (
    <div className={styles.wrap}>
      <PageTitle title={title_des.title} description={title_des.description} />

      <div className={styles.row}>
        <div>
          <Cooli />
        </div>
      </div>
      <div className={styles.footerZ}>
        <Footer />
      </div>
    </div>
  );
};

export default TitleDC;
