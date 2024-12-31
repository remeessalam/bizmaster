import React from "react";
import { Link } from "react-router-dom";

const LandingContact = () => {
  return (
    <div className="bg-dark2">
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="sec-title style2 text-white">Get In Touch</h2>
                <p className="mb-40 text-white">
                  Design is this a broad category encompasses various
                  technological solutions{" "}
                </p>
                <div className="social-btn style5 text-white">
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="contact-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-border"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="global-btn w-100">
                      Send Now
                      <img
                        src="assets/img/icon/right-icon.svg"
                        alt="COGNITECH SOLUTIONS"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
