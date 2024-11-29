import React from "react";
import TopNavbar from "../components/nav/top-nav-bar";
import Header from "../components/Sections/Header";
import SobreNosotros from "../components/Sections/sobre-nosotros";
import Equipo from "../components/Sections/equipo";
import Contacto from "../components/Sections/contacto";
import Inmuebles from "../components/Sections/Inmuebles";
import Footer from "../components/Sections/footer";
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
