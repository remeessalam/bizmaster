import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";

const ContactInner = () => {
  return (
    <div className="bg-dark2">
      {/* <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          title="COGNITECH SOLUTIONS"
        />
      </div> */}
      <div className="contact-area space">
        <div className="container">
          <div className="contact-page-wrap bg-theme">
            <div className="row gy-40 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Phone</h6>
                    <p className="contact-info_text">{companyDetails.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Location</h6>
                    <p className="contact-info_text">
                      {companyDetails.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Email</h6>
                    <p className="contact-info_text">{companyDetails.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default ContactInner;
