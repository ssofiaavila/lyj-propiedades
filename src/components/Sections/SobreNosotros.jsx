import React from "react";
import styled from "styled-components";
import inmuebleImage from "../../assets/img/inmuebles/inmueble-sobre-nosotros.jpg";
// Components
import ClientSlider from "../Elements/ClientSlider";

export default function SobreNosotros() {
  return (
    <Wrapper id="sobre-nosotros">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={inmuebleImage} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h1 className="font40 extraBold">Sobre nosotros</h1>
              <p className="font20">
                En LyJPropiedades, nos especializamos en ofrecer una amplia gama
                de servicios inmobiliarios, destacandonos por nuestra
                transparencia y eficiencia al brindar soluciones a nuestros
                clientes. Nos comprometemos a ayudarte a alcanzar tus objetivos
                con un enfoque personalizado, adaptandonos a tus necesidades
                para garantizar una experiencia satisfactoria y sin
                complicaciones.
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const Advertising = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 70%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;

const AddLeftInner = styled.div`
  width: 100%;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 90%;
  padding: 15% 15%;
  img {
    width: 800px;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
