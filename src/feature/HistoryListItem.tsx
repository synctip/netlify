/**
 * @file src\feature\HistoryListItem.tsx
 * @description History list item
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.1
 */

import React from "react";

type HistoryListItemProps = {
  title: string;
  description: string;
  action: unknown;
};

const HistoryListItem: React.FC<HistoryListItemProps> = ({
  title,
  description,
}) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Delete</button>
    </li>
  );
};

export default HistoryListItem;
