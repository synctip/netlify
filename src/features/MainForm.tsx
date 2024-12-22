/**
 * @file src\features\MainForm.tsx
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 22/12/2024
 * @license MIT
 * @version 1.0.0
 */

import React, { HTMLProps } from "react";
import MainInput from "./MainInput";
import "./MainForm.css";

const MainForm: React.FC<HTMLProps<HTMLFormElement>> = (props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form {...props} className="main-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <div className="field-row">
          <div className="row-item">
            <h3>בחירת תאריך</h3>
            <MainInput type="date" name="date" />
          </div>
          <div className="row-item">
            <h3>סך טיפים</h3>
            <MainInput type="number" name="tips" placeholder="0" />
          </div>
        </div>
      </div>
      <div className="form-field">
        <div className="field-row">
          <div className="row-item">
            <h3>הוסף איש צוות</h3>
            <MainInput type="text" name="name" placeholder="שם" />
          </div>
        </div>
        <div className="field-row">
          <div className="row-item">
            <MainInput type="datetime-local" name="start" placeholder="התחלה" />
          </div>
          <div className="row-item">
            <MainInput type="datetime-local" name="start" placeholder="התחלה" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
