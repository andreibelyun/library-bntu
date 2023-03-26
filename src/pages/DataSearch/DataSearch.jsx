import React from "react";
import {
  IconAtom,
  IconBntuBuilding,
  IconDocument,
  IconH,
  IconPrinter,
  IconQuotes,
  IconUserEdit,
} from "../../assets/icons/icons";
import Layout from "../../components/layout/Layout";
import MenuTree from "../../components/MenuTree/MenuTree";
import Title from "../../components/Title/Title";

function DataSearch() {
  const menuConfig = [
    { name: "Публикации", icon: <IconDocument />, link: "/" },
    { name: "Авторы", icon: <IconUserEdit />, link: "/" },
    { name: "Организации", icon: <IconBntuBuilding />, link: "/" },
    { name: "Цитирования", icon: <IconQuotes />, link: "/" },
    { name: "Научное направление", icon: <IconAtom />, link: "/" },
    { name: "Индекс h", icon: <IconH />, link: "/" },
    { name: "Источник публикации", icon: <IconPrinter />, link: "/" },
  ];

  return (
    <Layout>
      <div>
        <Title>Наукометрические показатели</Title>
        <MenuTree config={menuConfig} />
      </div>
    </Layout>
  );
}

export default DataSearch;
