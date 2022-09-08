import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTag = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      <link href="css/styles.css" rel="stylesheet" />
      <title>당신의 여행 도우미 NAGA | INTRO</title>
    </Helmet>
  );
};

export default MetaTag;
