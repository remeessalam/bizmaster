import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import ProcessThree from "../components/ProcessThree";
import CounterOne from "../components/CounterOne";
import WhyChoose from "../components/WhyChoose";
import Newsletter from "../components/Newsletter";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AboutFive from "../components/AboutFive";
import TestimonialFour from "../components/TestimonialFour";
import FaqThree from "../components/FaqThree";

const About = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <div className="">
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"About"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      {/* GoalArea */}
      {/* <GoalArea /> */}

      {/* AboutOne */}
      <AboutFive />

      {/* ProcessThree */}
      {/* <ProcessThree /> */}

      {/* TestimonialOne */}
      {/* <div className="space"> */}
      {/* </div> */}

      {/* CounterOne */}
      <CounterOne />

      {/* WhyChoose */}
      {/* <div className="space">
        <WhyChoose />
        </div> */}
      <div className="space-top" style={{ background: "#141416" }}>
        <FaqThree />
      </div>
      <div className="space-top" style={{ background: "#141416" }}>
        <TestimonialFour />
      </div>
      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <Footer />
    </div>
  );
};

export default About;
