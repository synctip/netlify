/**
 * @file src\App.tsx
 * @description This is the main Application file that
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 02/11/2024
 * @license MIT
 * @version 1.0.0
 */
import React from "react";
import TipsForm from "./components/Tips.form";
import { colors } from "./styles/colors";

type Application = React.FC;

const App: Application = () => {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: colors.text.primary.dark,
      }}
    >
      <TipsForm />
    </main>
  );
};

export default App;
