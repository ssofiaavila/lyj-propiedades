import React from "react";
// Sections
import TopNavbar from "../components/nav/top-nav-bar";
import Header from "../components/sections/header";
import SobreNosotros from "../components/sections/sobre-nosotros";
import Equipo from "../components/sections/equipo";
import Contacto from "../components/sections/contacto";
import Inmuebles from "../components/sections/inmuebles";
import Footer from "../components/sections/footer";
// import Pricing from "../components/Sections/Pricing";

const Landing =() => {
  return (
    <>
      <TopNavbar />
      <Header />
      <SobreNosotros />
      <Inmuebles />
      <Equipo /> 
      <Contacto />
      {/* <Pricing/> */}
      <Footer />
    </>
  );
}

export default Landing;
