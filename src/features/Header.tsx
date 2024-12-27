import React from "react";
import "@/style/Header.css";
import SearchIcon from "@/assets/icons/SVG/search.svg";

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
