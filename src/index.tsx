/**
 * @file src\index.tsx
 * @description The main entry point for the project
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 02/11/2024
 * @license MIT
 * @version 1.0.0
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";

/**
 * @param container html element that gonna contain the main `Application`
 */
const container = document.getElementById("app");

/**
 * @param root generates root from `React.createRoot`
 */
const root = createRoot(container as HTMLElement);

/**
 * Render the application using root.render()
 * @uses React.strictMode
 */
root.render(
  // Use strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
