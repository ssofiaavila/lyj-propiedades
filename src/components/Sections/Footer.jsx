import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="container">
        <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
          <Link
            className="flexCenter animate pointer"
            to="home"
            smooth={true}
            offset={-80}
          >
            <h1
              className="font15 extraBold whiteColor"
              style={{ marginLeft: "15px" }}
            >
              LYJ propiedades
            </h1>
          </Link>
          <StyleP className="whiteColor font13">
            © {getCurrentYear()} | Todos los derechos reservados.
          </StyleP>

          <Link
            className="whiteColor animate pointer font13"
            to="home"
            smooth={true}
            offset={-80}
          >
            Volver arriba
          </Link>
        </InnerWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #012136;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
