import React from "react";
import "@/style/Hero.css";
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div>
        <button>
          <img src="src/assets/icons/plus.png" alt="New" />
        </button>
        <h2>חדש</h2>
      </div>
      <div>
        <button>
          <img src="src/assets/icons/group.png" alt="Groups" />
        </button>
        <h2>קבוצות</h2>
      </div>
      <div>
        <button>
          <img src="src/assets/icons/more-vert.png" alt="More" />
        </button>
        <h2>עוד</h2>
      </div>
    </section>
  );
};

export default Hero;
