import React, { useEffect, useState } from "react";
import LandingPageHeader from "../Layout/LandingPageHeader";
import LandingBanner from "../LandingComponents/LandingBanner";
import LandingAbout from "../LandingComponents/LandingAbout";
import LandingService from "../LandingComponents/LandingService";
import LandingPageFooter from "../Layout/LandingPageFooter";
import Preloader from "../elements/Preloader";
import LandingWhyChoose from "../LandingComponents/LandingWhyChoose";
import LandingTestimonial from "../LandingComponents/LandingTestimonial";
import LandingContact from "../LandingComponents/LandingContact";
import BlogFive from "../components/BlogFive";

const LandingPage = ({ page }) => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {active === true && <Preloader />}

      <LandingPageHeader />
      <LandingBanner page={page} />
      <div className="bg-dark2 space-top">
        <LandingContact />
      </div>
      <LandingAbout page={page} />
      <LandingService page={page} />
      <LandingWhyChoose page={page} />
      <LandingTestimonial page={page} />
      <BlogFive />
      <LandingContact />
      <LandingPageFooter />
    </>
  );
};

export default LandingPage;
