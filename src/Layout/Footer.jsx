import React from "react";
import { Link } from "react-router-dom";
import { companyDetails, routes } from "../constant";

const Footer = () => {
  return (
    <section className="bg-dark2">
      <footer
        className="footer-wrapper footer-layout5"
        style={{ backgroundImage: "url(assets/img/bg/footer-bg5-1.png)" }}
      >
        <div className="container">
          <div className="widget-area">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-4">
                <div className="widget footer-widget widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img
                        src="assets/img/logo.png"
                        alt="COGNITEK SOLUTIONS"
                        style={{ height: "7rem" }}
                      />
                    </Link>
                  </div>
                  {/* <p className="footer-text mb-30 mt-30">
                    Many desktop ublishing packages web page editors no Lorem
                    Ipsum a default model text
                  </p> */}
                  {/* <div className="social-btn">
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#" tabIndex={-1}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      {routes.map((obj) => (
                        <li>
                          <Link to={obj.path}>{obj.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact us</h3>
                  <div className="widget-contact2">
                    <div className="widget-contact-grid">
                      <i className="fas fa-phone-alt" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">{companyDetails.phone}</Link>
                          <p />
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-envelope" />
                      <div className="contact-grid-details">
                        <h6>
                          <Link to="#">{companyDetails.email}</Link>
                          <p />
                        </h6>
                      </div>
                    </div>
                    <div className="widget-contact-grid">
                      <i className="fas fa-map-marker-alt" />
                      <div className="contact-grid-details">
                        <h6>
                          {companyDetails.address}
                          <p />
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row gy-3 justify-content-lg-between justify-content-center">
              {/* <div className="col-auto align-self-center">
                <p className="copyright-text text-center">
                  © <Link to="#">COGNITECH SOLUTIONS </Link> 2024 | All Rights
                  Reserved
                </p>
              </div> */}
              <div className="">
                <div
                  className="social-btn"
                  style={{ justifyContent: "center" }}
                >
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
