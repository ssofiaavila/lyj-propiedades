import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // Agregar import de react-router-dom

// Components
import Sidebar from "./side-bar";
import Backdrop from "../Elements/Backdrop";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import logoImage from "../../assets/img/logo.jpg";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link
            className="pointer flexNullCenter"
            to="home"
            smooth={true}
            style={{ color: "white" }}
          >
            <img src={logoImage} alt="Logo" width={40} height={40} />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              LYJ propiedades
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/"
                style={{ padding: "10px 15px", color: "white" }}
              >
                Inicio
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/#sobre-nosotros"
                style={{ padding: "10px 15px", color: "white" }}
              >
                Sobre nosotros
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/inmuebles"
                style={{ padding: "10px 15px", color: "white" }}
              >
                Inmuebles
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
            <RouterLink
                to="/#equipo"
                style={{ padding: "10px 15px", color: "white" }}
              >
                Equipo
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
            <RouterLink
                to="/#contact"
                style={{ padding: "10px 15px", color: "white" }}
              >
                Contacto
              </RouterLink>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #012136;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
