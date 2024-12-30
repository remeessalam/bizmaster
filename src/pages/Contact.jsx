import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import ContactInner from "../components/ContactInner";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Contact = () => {
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
      <HelmetReact title={"Contact"} />

      {/* HeaderFive */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* ContactInner */}
      <ContactInner />

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <Footer />
    </>
  );
};

export default Contact;
