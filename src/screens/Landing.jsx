import React from "react";
// Sections
import TopNavbar from "../components/nav/top-nav-bar";
import Header from "../components/Sections/Header";
import SobreNosotros from "../components/Sections/SobreNosotros";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Inmuebles from "../components/Sections/Inmuebles";

const Landing =() => {
  return (
    <>
      <TopNavbar />
      <Header />
      <SobreNosotros />
      <Inmuebles />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
