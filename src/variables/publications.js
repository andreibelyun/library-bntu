export const tableColumns = [
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
    accessor: "host_venue_id",
  },
  {
    Header: "Название издания",
    accessor: "host_venue_display_name",
  },
  {
    Header: "Глава",
    accessor: "biblio.volume",
  },
  {
    Header: "Выпуск",
    accessor: "biblio.issue",
  },
  {
    Header: "Страницы",
    accessor: "1",
  },
  {
    Header: "Издательство",
    accessor: "2",
  },
  {
    Header: "Авторы",
    accessor: "3",
  },
  {
    Header: "Цитирование",
    accessor: "4",
  },
  {
    Header: "Цитирование ссылка",
    accessor: "5",
  },
  {
    Header: "Ключевые слова",
    accessor: "6",
  },
  {
    Header: "Список литературы",
    accessor: "referenced_works.length",
  },
  {
    Header: "Релевантные публикации",
    accessor: "8",
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

export const filtersList = tableColumns.map((item) => ({
  text: item.Header,
  id: item.accessor,
}));

const filtersByDefaultNames = [
  "ID публикации",
  "DOI публикации",
  "Название публикации",
  "Год публикации",
  "Id издания",
  "Название издания",
  "Глава",
  "Выпуск",
  "Страницы",
  "Издательство",
  "Авторы",
  "Цитирование",
  "Цитирование ссылка",
];

export const filtersByDefault = filtersList.filter((item) =>
  filtersByDefaultNames.some((name) => name === item.text)
);

export const getTransformedData = (data) =>
  data.map((item) => ({
    id:
      (item?.id && (
        <a href={item.id} target="_blank" rel="noreferrer">
          {item.id}
        </a>
      )) ||
      "-",
    doi: item?.doi || "-",
    title: item?.title || "-",
    publication_year: item?.publication_year || "-",
    host_venue_id: item?.host_venue?.id || "-",
    host_venue_display_name: item?.host_venue?.display_name || "-",
  }));
