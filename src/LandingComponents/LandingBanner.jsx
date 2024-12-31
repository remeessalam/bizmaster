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
                      <span className="text-theme2"> RPA</span>
                    </h1>
                    <p className="hero-text text-white">
                      Accelerate innovation with cutting-edge Robotic Process
                      Automation (RPA) solutions designed to streamline
                      workflows, reduce manual tasks, and boost productivity,
                      enabling your business to achieve new heights of
                      efficiency and growth.
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="hero-title text-white">
                      Revolutionizing Your Business with
                      <span className="text-theme2">
                        {" "}
                        AI Calling Development
                      </span>
                    </h1>
                    <p className="hero-text text-white">
                      Transform your customer interactions with cutting-edge AI
                      calling solutions. Our AI-driven calling systems enhance
                      communication, automate responses, and provide intelligent
                      insights, empowering your business to deliver faster, more
                      personalized customer experiences while boosting
                      efficiency and growth.
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
