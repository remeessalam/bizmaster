import React from "react";

const HeroFive = () => {
  return (
    <section className="bg-dark2">
      <div
        className="hero-wrapper hero-5"
        id="hero"
        style={{ backgroundImage: "url(assets/img/hero/hero_bg_5_1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-style5 text-center">
                <h1 className="hero-title text-white">
                  Transforming Processes with
                  {/* <span className="text-theme2">RPA</span> &{" "} */}
                  <span className="text-theme2"> AI</span>
                </h1>
                <p className="hero-text text-white">
                  Let our AI systems handle the grind while you scale your
                  success.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-thumb5-1">
                <img src="assets/img/hero/homepagebanner.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFive;
