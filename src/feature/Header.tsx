import React from "react";
import "@/style/Header.css";
import SearchIcon from "@Icons/SVG/solidSearch.svg";

const Header: React.FC = () => {
  return (
    <header className="main">
      <h1>Synctip</h1>
      <button>
        <img src={SearchIcon} />
      </button>
    </header>
  );
};

export default Header;
