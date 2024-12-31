import React from "react";
import { Link } from "react-router-dom";
import { aiCalling, rpaservices } from "../constant";

const LandingService = ({ page }) => {
  // If no number is provided, default to showing all services

  const servicesToShow = page === "rpa" ? rpaservices : aiCalling;
  return (
    <section className="bg-dark2">
      <div className="service-area-4 space-top position-relative">
        <div className="shadow-shape-right" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  Our Services
                </span>
                <h2 className="sec-title style2 text-white">
                  {page === "rpa"
                    ? "Revolutionizing Efficiency with RPA Services"
                    : "Transforming Your Business with AI Calling Services"}
                  Your Business Goals with the Confidence{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-30 gy-30 justify-content-center">
            {servicesToShow.map((service) => (
              <div key={service.id} className="col-xl-4 col-md-6">
                <div className="service-card-4">
                  <div className="service-card-thumb">
                    <img
                      src={service.img}
                      alt="img"
                      style={{ aspectRatio: "16/9", objectFit: "cover" }}
                    />
                  </div>
                  <div className="service-card_content">
                    <h4 className="service-card_title">
                      <Link to="#">{service.title}</Link>
                    </h4>
                    <p className="service-card_text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingService;
