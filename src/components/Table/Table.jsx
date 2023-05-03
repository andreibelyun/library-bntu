import React from "react";
import styles from "./Table.module.scss";
import { useTable } from "react-table";
import Paginator from "../Paginator/Paginator";

function Table({ columns, data }) {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          <div className={styles.tableHeader}>
            <p>Результатов: 244</p>
          </div>

          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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

        <div className={styles.tableFooter}>
          <Paginator
            pages={[1, 2, 3, 4]}
            currentPage={1}
            onPageClick={() => {}}
          />
        </div>
      </table>
    </div>
  );
}

export default Table;
