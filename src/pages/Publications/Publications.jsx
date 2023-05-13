import React, { useEffect, useState } from "react";
import DataPageLayout from "../../components/DataPageLayout/DataPageLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import {
  defaultTableColumns,
  filtersByDefault,
  filtersList,
  searchFieldsList,
} from "../../variables/publications";

function Publications() {
  const [columns, setColumns] = useState(defaultTableColumns);
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(data.results);
  }, [data]);

  return (
    <DataPageLayout>
      <SearchBar
        title='Поиск публикации'
        fieldsNames={searchFieldsList}
        columns={columns}
        setColumns={setColumns}
        setData={setData}
        filtersList={filtersList}
        filtersByDefault={filtersByDefault}
      />
      {data.results && <Table columns={columns} data={data.results} />}
    </DataPageLayout>
  );
}

export default Publications;
