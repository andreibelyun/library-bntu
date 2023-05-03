import React, { useEffect, useState } from "react";
import {
  IconArrowDown,
  IconCloseMenu,
  IconFilter,
  IconSearch,
} from "../../assets/icons/icons";
import styles from "./SearchBar.module.scss";
import FiltersMenu from "./FiltersMenu/FiltersMenu";
import Btn from "../Btn/Btn";
import { api } from "../../api/api";

function SearchBar({ title, fieldsNames, setColumns, setData }) {
  const defaultFields = [{ id: 1, type: fieldsNames[0], value: "" }];

  const [fields, setFields] = useState(defaultFields);

  const [isFiltersOpen, setFiltersOpen] = useState(false);

  const addSearchField = () => {
    setFields((prev) => [
      ...prev,
      { id: fields.length + 1, type: fieldsNames[0], value: "" },
    ]);
  };

  const handleInput = (e) => {
    setFields((prev) => {
      const field = prev.find((item) => item.id === +e.target.name);
      field.value = e.target.value;
      return [...prev];
    });
  };

  const handleFieldTypeChange = (fieldID, newFieldType) => {
    setFields((prev) => {
      const field = prev.find((item) => item.id === fieldID);
      field.type = newFieldType;
      return [...prev];
    });
  };

  const clearFieldValue = (fieldID) => {
    setFields((prev) => {
      const field = prev.find((item) => item.id === fieldID);
      field.value = "";
      return [...prev];
    });
  };

  const handleClearClick = () => {
    setFields(defaultFields);
  };

  const handleSearchClick = () => {
    let queryString = "";

    fields.forEach((item, index) => {
      queryString += `${item.type.key}:${item.value}${
        index !== fields.length - 1 ? "," : ""
      }`;
    });

    api
      .getWorks(queryString)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    // console.log(fields);
  }, [fields]);

  return (
    <div className={styles.searchBar}>
      <h3 className={styles.title}>{title}</h3>
      {fields.map((field) => (
        <SearchField
          key={field.id}
          fieldsNames={fieldsNames}
          value={field}
          onInput={handleInput}
          onTypeChange={handleFieldTypeChange}
          clearFieldValue={clearFieldValue}
        />
      ))}
      <div className={styles.bottom}>
        <div className={styles.btnGroup}>
          <Btn className={styles.addField} onClick={addSearchField}>
            <IconCloseMenu />
            <span>Добавить поле поиска</span>
          </Btn>

          <div className={styles.filters}>
            <Btn
              onClick={() => {
                setFiltersOpen(!isFiltersOpen);
              }}
            >
              <IconFilter />
              <span>Фильтры</span>
            </Btn>
            {isFiltersOpen && <FiltersMenu />}
          </div>
        </div>
        <div className={styles.btnGroup}>
          <Btn noBorder onClick={handleClearClick}>
            Очистить
          </Btn>
          <Btn className={styles.search} fillGreen onClick={handleSearchClick}>
            <span>Поиск</span>
            <IconSearch />
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

const SearchField = ({
  fieldsNames,
  value,
  onInput,
  onTypeChange,
  clearFieldValue,
}) => {
  return (
    <div className={styles.top}>
      <Select
        value={value.type}
        fieldID={value.id}
        fieldsNames={fieldsNames}
        onTypeChange={onTypeChange}
      />
      <input
        name={value.id}
        className={styles.input}
        placeholder="Поиск..."
        value={value.value}
        onChange={onInput}
      />
      <button
        className={styles.clearField}
        onClick={() => {
          clearFieldValue(value.id);
        }}
      >
        <IconCloseMenu />
      </button>
    </div>
  );
};

const Select = ({ value, fieldID, fieldsNames, onTypeChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.select}>
      <button
        onClick={() => {
          setMenuOpen(!isMenuOpen);
        }}
      >
        <span>{value.name}</span>
        <IconArrowDown />
      </button>
      {isMenuOpen && (
        <SelectMenu
          items={fieldsNames}
          fieldID={fieldID}
          onTypeChange={onTypeChange}
          closeMenu={() => {
            setMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

const SelectMenu = ({ items, fieldID, onTypeChange, closeMenu }) => {
  return (
    <div className={styles.selectMenu}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => {
                onTypeChange(fieldID, item);
                closeMenu();
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
