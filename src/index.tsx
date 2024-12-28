import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";

// Ensure the @import statement is at the top of your CSS file
import "@/palette/Elegant.css";

const container = document.getElementById("app");
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
