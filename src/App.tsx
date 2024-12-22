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
type Application = React.FC;

const App: Application = () => {
  return (
    <>
      <header>
        <img src={logo} alt="SyncTip Logo" />
      </header>
      <main>
        <p>הצטרפו אלינו ברשתות החברתיות כדי לקבל את כל העדכונים הראשונים!</p>
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
