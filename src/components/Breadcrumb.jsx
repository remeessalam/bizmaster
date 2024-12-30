import React from "react";
import { Link } from "react-router-dom";
import bannerimage from "../assets/image/aboutusbanner.jpg";
const Breadcrumb = ({ title }) => {
  return (
    <div
      className=" breadcumb-wrapper position-relative"
      style={{
        backgroundImage: `url(${bannerimage})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="position-absolute top-0 left-0 right-0 bottom-0 bg-blue"
        style={{ opacity: 0.1, width: "100%" }}
      />
      {/* bg animated image/ */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-6 d-lg-block d-none">
            <div className="breadcumb-thumb">
              <img src="assets/img/normal/breadcrumb-thumb.png" alt="img" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
