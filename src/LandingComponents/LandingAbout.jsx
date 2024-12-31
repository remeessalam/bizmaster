import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const LandingAbout = ({ page }) => {
  return (
    <section className="bg-dark2">
      <div className="about-area-5 space-top space-bottom">
        <div className="shadow-shape-left" />
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center justify-content-between">
            <div className="col-xl-5">
              <div className="about-thumb5">
                <div className="img1">
                  <img
                    src={
                      page === "rpa"
                        ? "assets/img/landingpage/rpa/rpaabout.jpg"
                        : "assets/img/landingpage/ai/landingabout.jpg"
                    }
                    alt="img"
                  />
                </div>
                {/* <div className="about-counter-wrap jump-reverse">
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
                </div> */}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style1 text-white">
                  {page === "rpa"
                    ? "Unlock Efficiency with Robotic Process Automation (RPA)"
                    : "Simplifying Communication. Accelerating Success."}
                </h2>
                {page === "rpa"
                  ? "At Cognitek, we’re dedicated to helping businesses simplify their operations and achieve more. With our Robotic Process Automation (RPA) services, you can eliminate repetitive tasks, reduce errors, and enhance productivity. By automating key processes, we enable your team to focus on driving innovation and growth while saving time and resources."
                  : "At Cognitek, we specialize in transforming how businesses manage their calls. Our AI-powered calling agency takes the complexity out of customer communication, delivering smarter, faster, and more cost-effective solutions. Whether you’re handling inbound inquiries or reaching out to new leads, we’ve got you covered."}
              </div>
              <div className="btn-wrap">
                <Link to="/about" className="global-btn style3">
                  Explore More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
