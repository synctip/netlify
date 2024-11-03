import { colors } from "@/styles/colors";
import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <CircularProgress
        style={{
          color: colors.secondary.main,
        }}
      />
    </div>
  );
};

export default LoadingScreen;
