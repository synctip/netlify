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
import getAppVersion from "./utils/getVersion";
import LoadingScreen from "./components/LoadingScreen";

type Application = React.FC;

const App: Application = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [version, setVersion] = React.useState<string>("");

  React.useEffect(() => {
    if (!loading && !version) {
      const getVersion = async () => {
        setLoading(true);
        const result = await getAppVersion();
        setVersion(result);
        setLoading(false);
      };

      getVersion();
    }
  }, [loading, version]);

  if (loading || !version) return <LoadingScreen />;

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
      <header
        style={{
          position: "relative",
          display: "flex",
          height: 60,
        }}
      >
        <p
          style={{
            color: "#999",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            height: 22,
            fontSize: 10,
          }}
        >
          <a
            href="https://github.com/IliaKamilov"
            style={{
              color: colors.text.primary.light,
              textDecoration: "none",
              fontSize: 12,
            }}
          >
            Ilia Kamilov
          </a>{" "}
          © {new Date().getFullYear()}
        </p>
        <h1
          style={{
            color: colors.primary.main,
            fontSize: 24,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            gap: 5,
            position: "relative",
            margin: "24px 0 0",
            padding: 0,
          }}
        >
          TipSync
          <span
            style={{
              fontSize: 10,
              color: colors.text.primary.light,
              marginTop: 5,
            }}
          >
            {version}
          </span>
        </h1>
      </header>
      <TipsForm />
    </main>
  );
};

export default App;
