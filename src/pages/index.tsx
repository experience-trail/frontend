import withRoot from "../components/LandingPage/withRoot";
// --- Post bootstrap -----
import React from "react";
import ProductCategories from "../components/LandingPage/views/ProductCategories";
// import ProductSmokingHero from "../components/LandingPage/views/ProductSmokingHero";
import AppFooter from "../components/LandingPage/views/AppFooter";
import ProductHero from "../components/LandingPage/views/ProductHero";
import ProductValues from "../components/LandingPage/views/ProductValues";
import ProductHowItWorks from "../components/LandingPage/views/ProductHowItWorks";
// import ProductCTA from "../components/LandingPage/views/ProductCTA";
import AppAppBar from "../components/LandingPage/views/AppAppBar";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
