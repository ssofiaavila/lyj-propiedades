import React from "react";
import styled from "styled-components";
// Assets
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contacto</h1>
            <p className="font20">
              ¿Tenes preguntas o necesitas informacion detallada de nuestras
              propiedades? No dudes en contactarte con nosotros.
              <br></br>
              Nuestro compromiso es brindarte el mejor asesoramiento para que
              encuentres el hogar que te mereces. Nuestras vias de contacto son
              WhatApp, correo electronico, redes sociales o visitarnos en
              nuestras oficinas.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nombre y apellido:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font13">Motivo:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <label className="font13">Mensaje</label>

                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Enviar mensaje"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <ContactContainer>
                <ContactInfo>
                  <div className="contact-row">
                    <WhatsAppIcon style={{ color: "#25D366" }} />
                    <span>(011) 2818-4997</span>
                  </div>
                  <div className="contact-row">
                    <EmailIcon style={{ color: "#EA4335" }} />
                    <span>evelinjuani006@gmail.com</span>
                  </div>
                  <div className="contact-row">
                    <InstagramIcon style={{ color: "#E4405F" }} />
                    <span>LyJ.Propiedades</span>
                  </div>
                  <p>Lunes a viernes de 8 a 20 horas</p>
                </ContactInfo>

                <MapWrapper>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.3389823292234!2d-58.22324218477036!3d-34.76437008041785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3277204c74e11%3A0x1234567890abcdef!2sCno.%20Gral%20Belgrano%204398%2C%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1692231234567!5m2!1ses-419!2sar"
                    width="500"
                    height="500"
                    allowFullScreen=""
                    loading="lazy"
                    title="Ubicación"
                  ></iframe>
                </MapWrapper>
              </ContactContainer>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #012136;
  background-color: #012136;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Alineación al inicio (arriba) */
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 20px;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Fondo blanco semitransparente */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  .contact-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
`;

const MapWrapper = styled.div`
  flex: 1;
  iframe {
    width: 800;
    height: 600;
    border-radius: 8px;
  }
`;
