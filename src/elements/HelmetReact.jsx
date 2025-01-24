import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || COGNITECH</title>
      <meta name="description" content="COGNITECH" />
    </Helmet>
  );
};

export default HelmetReact;
