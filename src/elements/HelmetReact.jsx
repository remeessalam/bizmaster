import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || COGNITEK</title>
      <meta name="description" content="COGNITEK" />
    </Helmet>
  );
};

export default HelmetReact;
