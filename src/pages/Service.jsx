import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import ServiceView from "../components/ServiceView";
import AppointmentTwo from "../components/AppointmentTwo";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ServiceFive from "../components/ServiceFive";
import BlogFive from "../components/BlogFive";

const Service = () => {
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
      <HelmetReact title={"Service"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Service" />

      {/* ServiceOne */}
      <ServiceFive />
      {/* <ServiceView /> */}

      {/* AppointmentTwo */}
      {/* <AppointmentTwo /> */}

      {/* Newsletter */}
      {/* <Newsletter /> */}
      <BlogFive />

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default Service;
