/**
 * @file src\feature\HistoryList.tsx
 * @description This component is responsible for rendering the list of history records
 * that the user created.
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.1
 * @app_version 2.0.0
 */

import React from "react";
import HistoryListItem from "./HistoryListItem";
import "@/style/HistoryList.css";
import { fakerHE as faker } from "@faker-js/faker";

const HistoryList: React.FC = () => {
  const itemsCount = 10;
  const items = Array.from({ length: itemsCount }, (_, index) => index + 1);

  return (
    <ul className="historyList">
      {items.map((item) => {
        const title = faker.person.fullName();
        return (
          <HistoryListItem
            title={title}
            description=""
            action={false}
            key={item}
          />
        );
      })}
    </ul>
  );
};

export default HistoryList;
