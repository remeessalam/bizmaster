import React from "react";
import "./landingcss.css";
import { whyChooseAI, whyChooseRPA } from "../constant";

const LandingWhyChoose = ({ page }) => {
  let whychoose = page === "rpa" ? whyChooseRPA : whyChooseAI;
  return (
    <section className="whychoose-section bg-dark2">
      <div className="whychoose-container">
        <h2 className="whychoose-title">Why Choose Cognitek?</h2>
        <div className="whychoose-grid">
          {whychoose.map((obj) => (
            <div key={obj.id} className="whychoose-item">
              <h3 className="whychoose-item-title">{obj.title}</h3>
              <p className="whychoose-item-description">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingWhyChoose;
