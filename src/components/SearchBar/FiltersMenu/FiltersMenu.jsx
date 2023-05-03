import React, { useState } from "react";
import styles from "./FiltersMenu.module.scss";
import Btn from "../../Btn/Btn";
import { IconCheck } from "../../../assets/icons/icons";

function FiltersMenu({ fieldsList }) {
  return (
    <div className={styles.filtersMenu}>
      <h4 className={styles.title}>Фильтры</h4>

      <div className={styles.head}>
        <div className={styles.columns}>
          <h6>Колонки</h6>
          <div className={styles.btnGroup}>
            <Btn>По умолчанию</Btn>
            <Btn gray>Все колонки</Btn>
          </div>
        </div>
        <div className={styles.access}>
          <h6>Открытый доступ</h6>
          <div className={styles.btnGroup}>
            <Btn gray>Gold</Btn>
            <Btn>Green</Btn>
            <Btn gray>Hybrid</Btn>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.fieldFilters}>
          <Checkbox text={"asdfsfsfsdf"} />
          {fieldsList && fieldsList.map((field) => <Checkbox />)}
        </div>
        <div className={styles.citation}>
          <h6>Цитирование</h6>
          <Btn gray>Только с цитированием</Btn>
        </div>
      </div>

      <div className={styles.footer}>
        <Btn noBorder>Сбросить фильтры</Btn>
        <Btn fillGreen>Применить</Btn>
      </div>
    </div>
  );
}

export default FiltersMenu;

const Checkbox = ({ id, text }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={`$id}`}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label htmlFor={`$id}`}>
        <div className={styles.visibleCheckbox}>
          <IconCheck />
        </div>
        <p className={styles.checkboxText}>{text}</p>
      </label>
    </div>
  );
};
