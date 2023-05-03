import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DataPageLayout.module.scss";

function DataPageLayout({ children }) {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default DataPageLayout;
