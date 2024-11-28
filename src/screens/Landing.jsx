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
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    // Detectar el hash en la URL y desplazarse al elemento correspondiente
    if (window.location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
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
};

export default Landing;
