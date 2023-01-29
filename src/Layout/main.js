import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import styles from "../style";

const Main = () => {
  return (
    <>
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
    <Header />
    </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
