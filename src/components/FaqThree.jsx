import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { faqs } from "../constant";
const FaqThree = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <section className="bg-dark2">
      <section className="faq-area-5 space-top">
        <div className="container">
          <div className="row gy-40 justify-content-center">
            <div className="col-xxl-6 text-xxl-start text-center">
              <div className="title-area mb-60">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  Ask Question
                </span>
                <h2 className="sec-title style2 text-white">
                  Transforming Vision into Reality Together
                </h2>
              </div>
              <div className="faq-thumb5 mh-50" style={{ width: "100%" }}>
                <img
                  src="assets/img/normal/faq-thumb-5-1.jpg"
                  alt="img"
                  className="h-50"
                  style={{
                    maxHeight: "70vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={10} />
                            K+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <p className="sec-desc">Client Review</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 align-self-end">
              <div className="accordion-area accordion" id="faqAccordion">
                {faqs.map((obj) => (
                  <div
                    key={obj.id}
                    className={`accordion-card style5 ${
                      activeId === obj.id ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion-header"
                      id={`collapse-item-${obj.id}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={() => toggleAccordion(obj.id)}
                        aria-expanded={activeId === obj.id}
                        aria-controls={`collapse-${obj.id}`}
                      >
                        {obj.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${obj.id}`}
                      className={`accordion-collapse collapse ${
                        activeId === obj.id ? "show" : ""
                      }`}
                      aria-labelledby={`collapse-item-${obj.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{obj.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FaqThree;
