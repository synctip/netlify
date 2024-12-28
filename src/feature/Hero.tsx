import React from "react";
import "@/style/Hero.css";
import MoreIcon from "@/Icons/More";
import PlusIcon from "@/Icons/Plus";
import People from "@/Icons/People";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="cta">
        <button>
          <PlusIcon />
        </button>
        <h4>חדש</h4>
      </div>
      <div className="cta">
        <button>
          <People />
        </button>
        <h4>קבוצות</h4>
      </div>
      <div className="cta">
        <button>
          <MoreIcon />
        </button>
        <h4>עוד</h4>
      </div>
    </section>
  );
};

export default Hero;
