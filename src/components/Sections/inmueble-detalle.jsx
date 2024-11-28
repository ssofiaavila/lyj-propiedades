import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { Link } from "react-router-dom";

const InmuebleDetalle = ({
  nombre,
  precio,
  habitaciones,
  banios,
  ubicacion,
  descripcion,
  imagenPrincipal,
  imagen1,
  imagen2,
  imagen3,
}) => {
  return (
    <>
      <Wrapper id="home" className="container flexSpaceCenter">
        <h1 className="extraBold font60" style={{ color: "#012136" }}>
          {nombre}
        </h1>
        <ImgBtn className="animate pointer">
          <Img
            className="radius8"
            src={imagenPrincipal}
            alt="project"
            style={{ zIndex: 9 }}
          />
        </ImgBtn>

        <TitleContainer>
          <InfoContainer>
            <InfoItem>
              <LocationOnIcon style={{ marginRight: "5px" }} />
              <span>{ubicacion}</span>
            </InfoItem>
            <InfoItem>
              <AttachMoneyIcon style={{ marginRight: "5px" }} />
              <span>{precio} USD</span>
            </InfoItem>
            <InfoItem>
              <HotelIcon style={{ marginRight: "5px" }} />
              <span>
                {habitaciones}{" "}
                {habitaciones > 1 ? "habitaciones" : "habitación"} 
              </span>
            </InfoItem>
            <InfoItem>
              <BathtubIcon style={{ marginRight: "5px" }} />
              <span>
                {banios} {banios > 1 ? "baños" : "baño"}
              </span>
            </InfoItem>
          </InfoContainer>
        </TitleContainer>

        <p className="font15" style={{ textAlign: "center" }}>
          {descripcion}
        </p>

        <ImageGrid>
          <ImageItem>
            <img src={imagen1} alt="Interior 1" />
          </ImageItem>
          <ImageItem>
            <img src={imagen2} alt="Interior 2" />
          </ImageItem>
          <ImageItem>
            <img src={imagen3} alt="Interior 3" />
          </ImageItem>
        </ImageGrid>

        <DetailButton className="font15 pointer">
          <Link
            to="/#contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Quiero más información
          </Link>
        </DetailButton>
      </Wrapper>
    </>
  );
};

export default InmuebleDetalle;

const Wrapper = styled.section`
  padding: 100px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: 200px;
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  width: 70%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  :hover > img {
    opacity: 0.8;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
  gap: 15px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 10px;

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const DetailButton = styled.button`
  margin-top: 10px;
  background-color: #012136;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #013b6c;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;
  width: 100%;
  max-width: 900px;
`;

const ImageItem = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
  }
`;
