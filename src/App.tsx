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

type Application = React.FC;

const App: Application = () => {
  return (
    <main>
      <h1 dir="ltr">SyncTip</h1>
      <p>
        הפרוייקט שלנו קרוב להשקה, אל תפספסו עדכונים מרתקים! הצטרפו אלינו ברשתות
        החברתיות כדי להיות הראשונים לדעת.
      </p>
      <button>פייסבוק</button>
      <button>אינסטגרם</button>
    </main>
  );
};

export default App;
