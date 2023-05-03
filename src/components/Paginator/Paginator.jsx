import React from "react";
import styles from "./Paginator.module.scss";
import { IconArrowDown } from "../../assets/icons/icons";
import Btn from "../Btn/Btn";
import classNames from "classnames";

function Paginator({ pages, currentPage, onPageClick }) {
  return (
    <div className={styles.paginator}>
      <Btn noBorder className={styles.back}>
        <IconArrowDown />
      </Btn>
      <div className={styles.pages}>
        {pages.map((page) => (
          <PageCircle
            key={page}
            pageNum={page}
            onPageClick={onPageClick}
            isActivePage={currentPage === page}
          />
        ))}
      </div>
      <Btn noBorder className={styles.next}>
        <IconArrowDown />
      </Btn>
    </div>
  );
}

export default Paginator;

const PageCircle = ({ pageNum, onPageClick, isActivePage }) => (
  <button
    onClick={() => onPageClick(pageNum)}
    className={classNames(styles.pageCircle, {
      [styles.activePageCircle]: isActivePage,
    })}
  >
    {pageNum}
  </button>
);
