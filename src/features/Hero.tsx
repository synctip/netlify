import React from "react";
import "@/style/Hero.css";
import CreateIcon from "@/assets/icons/SVG/plus.svg";
import PeopleIcon from "@/assets/icons/SVG/people.svg";
import MoreIcon from "@/assets/icons/SVG/more.svg";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="cta">
        <button>
          <img src={CreateIcon} />
        </button>
        <h4>חדש</h4>
      </div>
      <div className="cta">
        <button>
          <img src={PeopleIcon} />
        </button>
        <h4>קבוצות</h4>
      </div>
      <div className="cta">
        <button>
          <img src={MoreIcon} />
        </button>
        <h4>עוד</h4>
      </div>
    </section>
  );
};

export default Hero;
