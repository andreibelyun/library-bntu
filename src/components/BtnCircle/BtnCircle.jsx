import React from "react";
import styles from "./BtnCircle.module.scss";

function BtnCircle({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default BtnCircle;
