import React from "react";
import "@/style/Header.css";

const Header: React.FC = () => {
  return (
    <header className="main">
      <h1>SyncTip</h1>
      <button>
        <img src="src/assets/icons/search.png" alt="Search" />
      </button>
    </header>
  );
};

export default Header;
