import React from "react";
import styles from "./Table.module.scss";
import { useTable } from "react-table";
import Paginator from "../Paginator/Paginator";
import Btn from "../Btn/Btn";
import { IconArrowDown, IconExport } from "../../assets/icons/icons";

function Table({ columns, data, dataCount, currentPage, setCurrentPage }) {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        <p>Результатов: {dataCount}</p>
        <Btn className={styles.export}>
          <IconExport />
          <span>Экспорт таблицы</span>
          <IconArrowDown />
        </Btn>
      </div>

      <div className={styles.tableContainer}>
        <table {...getTableProps()} className={styles.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.tableFooter}>
        <Paginator
          dataCount={dataCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Table;
