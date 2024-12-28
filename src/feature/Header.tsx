import React from "react";
import "@/style/Header.css";
import SearchIcon from "@/Icons/Search";

const Header: React.FC = () => {
  return (
    <header className="main">
      <h1>Synctip</h1>
      <button>
        <SearchIcon />
      </button>
    </header>
  );
};

export default Header;