import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import ServiceInnerDetails from "../components/ServiceInnerDetails";
import FooterFive from "../Layout/Footer";
import Header from "../Layout/Header";

const ServiceDetails = () => {
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
      <HelmetReact title={"Service Details"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Service Details" />

      {/* ServiceDetails */}
      <ServiceInnerDetails />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterFive />
    </>
  );
};

export default ServiceDetails;
