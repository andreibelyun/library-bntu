import React from "react";
import styles from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
