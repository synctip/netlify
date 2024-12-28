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
import Header from "./feature/Header";
import Hero from "./feature/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default App;
