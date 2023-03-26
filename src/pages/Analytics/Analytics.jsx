import React from "react";
import {
  IconAnalyticsSquare,
  IconBntuBuilding,
  IconBookSearch,
  IconBubbles,
  IconDocumentAnalytics,
  IconDocumentAtom,
} from "../../assets/icons/icons";
import Layout from "../../components/layout/Layout";
import MenuTree from "../../components/MenuTree/MenuTree";
import Title from "../../components/Title/Title";

function Analytycs() {
  const menuConfig = [
    {
      name: "Организации: анализ публикаций",
      icon: <IconBntuBuilding />,
      link: "/",
    },
    {
      name: "Динамика публикаций/цитирований",
      icon: <IconAnalyticsSquare />,
      link: "/",
    },
    {
      name: "Издания: анализ публикаций и ключевых слов",
      icon: <IconBookSearch />,
      link: "/",
    },
    {
      name: "Публикации по ключевым словам",
      icon: <IconDocumentAnalytics />,
      link: "/",
    },
    { name: "Сеть ключевого слова", icon: <IconBubbles />, link: "/" },
    {
      name: "Научная сфера организации",
      icon: <IconDocumentAtom />,
      link: "/",
    },
  ];

  return (
    <Layout>
      <div>
        <Title>Аналитика и&nbsp;визуализация</Title>
        <MenuTree config={menuConfig} />
      </div>
    </Layout>
  );
}

export default Analytycs;
