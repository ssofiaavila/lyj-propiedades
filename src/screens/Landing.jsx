import React from "react";
import TopNavbar from "../components/nav/top-nav-bar";
import Header from "../components/sections/Header";
import SobreNosotros from "../components/sections/sobre-nosotros";
import Equipo from "../components/sections/equipo";
import Contacto from "../components/sections/contacto";
import Inmuebles from "../components/sections/inmuebles";
import Footer from "../components/sections/footer";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.location.hash === "#sobre-nosotros") {
      const sobreNosotrosSection = document.getElementById("sobre-nosotros");
      if (sobreNosotrosSection) {
        sobreNosotrosSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.location.hash === "#equipo") {
      const equipoSection = document.getElementById("equipo");
      if (equipoSection) {
        equipoSection.scrollIntoView({ behavior: "smooth" });
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
      <Footer />
    </>
  );
};


export default Landing;
