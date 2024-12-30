import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeroFive from "../components/HeroFive";
import ServiceFive from "../components/ServiceFive";
import ClientThree from "../components/ClientThree";
import AboutFive from "../components/AboutFive";
import ProcessTwo from "../components/ProcessTwo";
import TestimonialFour from "../components/TestimonialFour";
import PricingTwo from "../components/PricingTwo";
import CTAThree from "../components/CTAThree";
import TeamFour from "../components/TeamFour";
import FaqThree from "../components/FaqThree";
import BlogFive from "../components/BlogFive";
import MarqueeFour from "../components/MarqueeFour";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
const Home = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Home"} />

      {/* HeaderFive */}
      <Header />

      {/* HeroFive */}
      <HeroFive />

      {/* AboutFive */}
      <AboutFive />
      {/* ServiceFive */}
      <ServiceFive numberOfServices={3} />

      {/* ClientThree */}
      {/* <ClientThree /> */}

      {/* ProcessTwo */}
      <ProcessTwo />

      {/* TestimonialFour */}
      <TestimonialFour />

      {/* PricingTwo */}
      {/* <PricingTwo /> */}

      {/* CTA_Three */}
      {/* <CTAThree /> */}

      {/* TeamFour */}
      {/* <TeamFour /> */}

      {/* FaqThree */}
      <FaqThree />

      {/* BlogFive */}
      <BlogFive />

      {/* MarqueeFour */}
      {/* <MarqueeFour /> */}

      {/* FooterFive */}
      <Footer />
    </>
  );
};

export default Home;
