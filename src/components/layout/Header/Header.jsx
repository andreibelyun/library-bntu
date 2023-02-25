import React from "react";
import { BntuMainLogo, IconBurgerMenu } from "../../../assets/icons/icons";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <BntuMainLogo className={styles.logo} />
      <button className={styles.burger}>
        <IconBurgerMenu className={styles.burger} />
      </button>
    </header>
  );
}

export default Header;
