/**
 * @file src\features\MainInput.tsx
 * @description Main html input element styled based on all application properties
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 22/12/2024
 * @license MIT
 * @version 1.0.0
 */

import React, { HTMLProps } from "react";
import "./MainInput.css";

const MainInput: React.FC<HTMLProps<HTMLInputElement>> = (props) => {
  return <input {...props} className="main-input" />;
};

export default MainInput;
