import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || COGNITECH SOLUTIONS</title>
      <meta name="description" content="COGNITECH SOLUTIONS" />
    </Helmet>
  );
};

export default HelmetReact;
