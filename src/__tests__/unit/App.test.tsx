/**
 * @file src\__tests__\unit\App.test.tsx
 * @description Main App test suite. It tests the App component
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 28/12/2024
 * @license MIT
 * @version 0.0.1
 * @tag v2
 * @app_version 2.0.0-prelaunch
 */

import React from "react";
import App from "../../App";

test("renders App component", () => {
  expect(<App />).toBeTruthy();
});
