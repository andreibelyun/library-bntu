import React, { useState } from "react";
import DataPageLayout from "../../components/DataPageLayout/DataPageLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";

const defaultColumns = [
  {
    Header: "ID публикации",
    accessor: "id",
  },
  {
    Header: "DOI публикации",
    accessor: "doi",
  },
  {
    Header: "Название публикации",
    accessor: "title",
  },
  {
    Header: "Год публикации",
    accessor: "publication_year",
  },
  {
    Header: "Дата публикации",
    accessor: "publication_date",
  },
  {
    Header: "Id издания",
    accessor: "host_venue.id",
  },
  {
    Header: "Название издания",
    accessor: "host_venue.display_name",
  },
  {
    Header: "Глава",
    accessor: "biblio.volume",
  },
  {
    Header: "Выпуск",
    accessor: "name",
  },
  {
    Header: "Name",
    accessor: "biblio.issue",
  },
];

const searchFieldsNames = [
  { id: 1, name: "Универсальный поиск", key: "fulltext.search" },
  { id: 2, name: "Название публикации", key: "title.search" },
  { id: 3, name: "ID автора", key: "author.id" },
  { id: 4, name: "ORCHID", key: "author.orcid" },
  { id: 5, name: "ID направления", key: "concepts.id" },
  { id: 6, name: "Аффиляция", key: "institutions.ror" },
  { id: 7, name: "Дата публикации", key: "publication_date" },
];

function Publications() {
  const [columns, setColumns] = useState(defaultColumns);
  const [data, setData] = useState({});

  return (
    <DataPageLayout>
      <SearchBar
        title="Поиск публикации"
        fieldsNames={searchFieldsNames}
        setColumns={setColumns}
        setData={setData}
      />
      <div>{JSON.stringify(data.results)}</div>
      {/* <Table columns={columns} data={data} /> */}
    </DataPageLayout>
  );
}

export default Publications;
