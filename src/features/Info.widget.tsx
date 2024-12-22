/**
 * @file src\features\Info.widget.tsx
 * @description Info widget component to display title, value, icon
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 22/12/2024
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import "./Info.widget.css";

type InfoWidgetProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};
const InfoWidget: React.FC<InfoWidgetProps> = ({ icon, title, value }) => {
  return (
    <article className="info-widget">
      <h2 className="title">{title}</h2>
      <div className="row">
        <h3>{value}</h3>
        <p>{icon}</p>
      </div>
    </article>
  );
};

export default InfoWidget;
