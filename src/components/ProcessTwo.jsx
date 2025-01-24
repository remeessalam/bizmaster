import React from "react";
import { whychooseus } from "../constant";

const ProcessTwo = () => {
  return (
    <section className="bg-dark2">
      <div className="process-area-2 space-bottom space-top">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  Why Cognitek?
                </span>
                <h2 className="sec-title style2 text-white">
                  Our Commitment to Excellence
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="mb-60 sec-text text-white mt-0">
                {/* We are dedicated to providing tailored solutions that address
                your unique needs. By combining expertise, innovation, and
                collaboration, we help your business succeed and stay
                competitive in a constantly changing market. Here's why you
                should choose us */}
              </p>
            </div>
          </div>
          <div className="row gy-30">
            {whychooseus.map((obj) => (
              <div className="col-lg-6 col-xl-3 process-card-wrap2">
                <div className="process-card style2">
                  <h3 className="process-card_number">0{obj.id}</h3>
                  <div className="process-card_content">
                    <span className="process-card-text">{obj.title}</span>
                    <h4 className="process-card-title">{obj.desc}</h4>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-6 col-xl-3 process-card-wrap2">
              <div className="process-card style2">
                <h3 className="process-card_number">02</h3>
                <div className="process-card_content">
                  <span className="process-card-text">Technical Operation</span>
                  <h4 className="process-card-title"> Growth Acceler</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap2">
              <div className="process-card style2">
                <h3 className="process-card_number">03</h3>
                <div className="process-card_content">
                  <span className="process-card-text">Technical Operation</span>
                  <h4 className="process-card-title"> Growth Acceler</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap2">
              <div className="process-card style2">
                <h3 className="process-card_number">04</h3>
                <div className="process-card_content">
                  <span className="process-card-text">Technical Operation</span>
                  <h4 className="process-card-title"> Growth Acceler</h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTwo;
