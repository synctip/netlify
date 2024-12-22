/**
 * @file src\App.tsx
 * @description Main entry point for the SyncTip application
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 22/12/2024
 * @license MIT
 * @version 2.0.0-prelaunch
 */

import React from "react";
import "./App.css";
import logo from "@/assets/images/synctip-logo-2048.svg";
import InfoWidget from "./features/Info.widget";
import WidgetsCarousel from "./features/WidgetsCarousel";
import MainForm from "./features/MainForm";
type Application = React.FC;

const App: Application = () => {
  return (
    <>
      <header>
        <img src={logo} alt="SyncTip Logo" />
      </header>
      <main>
        <WidgetsCarousel>
          <InfoWidget title="אנשי צוות" value={7} icon="👥" />
          <InfoWidget title="סך שעות" value="12:34" icon="🕗" />
          <InfoWidget title={'סה"כ לשעה'} value="56.32" icon="💵" />
        </WidgetsCarousel>
        <MainForm />
      </main>
      <footer>
        <a href="https://facebook.com/synctip2">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/synctip">
          <i className="fab fa-instagram"></i>
        </a>
      </footer>
    </>
  );
};

export default App;
