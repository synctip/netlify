/**
 * @file src\features\WidgetsCarousel.tsx
 * @description Widgets carousel list includes InfoWidget components and
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 22/12/2024
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import InfoWidget from "./Info.widget";
import "./WidgetsCarousel.css";

const WidgetsCarousel: React.FC<{
  children: React.ReactElement<typeof InfoWidget>[];
}> = ({ children }) => {
  return <section className="widgets-carousel">{children}</section>;
};

export default WidgetsCarousel;
