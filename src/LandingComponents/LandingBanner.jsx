const LandingBanner = ({ page }) => {
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
                {page === "rpa" ? (
                  <>
                    <h1 className="hero-title text-white">
                      Revolutionizing Your Business with
                      <br />
                      <span className="text-theme2">
                        {" "}
                        Intelligent Automations
                      </span>
                    </h1>
                    <p className="hero-text text-white">
                      Simplify workflows and eliminate manual tasks with
                      Cognitek's smart RPA solutions—designed to let you focus
                      on growing your business.
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="hero-title text-white">
                      Revolutionizing Your Business with
                      <br />
                      <span className="text-theme2"> AI Calling</span>
                    </h1>
                    <p className="hero-text text-white">
                      24/7 AI agents deliver superior customer interactions that
                      boost conversions while saving your business time and
                      money
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-thumb5-1">
                <img
                  src={
                    page === "rpa"
                      ? "assets/img/landingpage/rpa/rpabanner.jpg"
                      : "assets/img/landingpage/ai/aibanner.jpg"
                  }
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
