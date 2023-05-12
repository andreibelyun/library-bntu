export const defaultTableColumns = [
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
    data: (item) => item.host_venue.display_name,
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

export const searchFieldsList = [
  { id: 1, name: "Универсальный поиск", key: "fulltext.search" },
  { id: 2, name: "Название публикации", key: "title.search" },
  { id: 3, name: "ID автора", key: "author.id" },
  { id: 4, name: "ORCHID", key: "author.orcid" },
  { id: 5, name: "ID направления", key: "concepts.id" },
  { id: 6, name: "Аффиляция", key: "institutions.ror" },
  { id: 7, name: "Дата публикации", key: "publication_date" },
];

export const filtersList = [
  {
    text: "ID публикации",
    id: "id",
  },
  {
    text: "DOI публикации",
    id: "doi",
  },
  {
    text: "Название публикации",
    id: "title",
  },
  {
    text: "Год публикации",
    id: "publication_year",
  },
  {
    text: "Дата публикации",
    id: "publication_date",
  },
  {
    text: "Id издания",
    id: "host_venue.id",
  },
  {
    text: "Название издания",
    id: "host_venue.display_name",
  },
  {
    text: "Глава",
    id: "biblio.volume",
  },
  {
    text: "Выпуск",
    id: "name",
  },
  {
    text: "Name",
    id: "biblio.issue",
  },
  {
    text: "sdadasd",
    id: "asdasdasd.issue",
  },
];

export const filtersByDefault = [
  {
    text: "Дата публикации",
    id: "publication_date",
  },
  {
    text: "Id издания",
    id: "host_venue.id",
  },
  {
    text: "Название издания",
    id: "host_venue.display_name",
  },
  {
    text: "Глава",
    id: "biblio.volume",
  },
  {
    text: "Выпуск",
    id: "name",
  },
];
