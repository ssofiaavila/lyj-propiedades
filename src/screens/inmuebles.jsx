import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Footer from "../components/Sections/Footer";
import ProjectBox from "../components/Elements/ProjectBox";
import Inmueble1 from "../assets/img/inmuebles/inmueble-1.jpg";
import Inmueble2 from "../assets/img/inmuebles/inmueble-2.jpg";
import Inmueble3 from "../assets/img/inmuebles/inmueble-3.jpg";
import Inmueble4 from "../assets/img/inmuebles/inmueble-4.jpg";
import Inmueble5 from "../assets/img/inmuebles/inmueble-5.jpg";
import Inmueble6 from "../assets/img/inmuebles/inmueble-6.jpg";

import { useNavigate } from "react-router-dom";

const Inmuebles = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopNavbar />
      <Wrapper className="container">
        <div className="text-center">
          <h1 className="extraBold font60" style={{ color: "#012136" }}>
            Inmuebles disponibles
          </h1>
        </div>

        <GridContainer>
          <ProjectBox
            img={Inmueble1}
            title="Chalet adosado"
            text="150.000 USD | 3 ambientes | San Isidro"
            action={() => navigate("/inmuebles/1")}
            />
          <ProjectBox
            img={Inmueble2}
            title="Moderna"
            text="240.000 USD | 5 ambientes | La Plata"
            action={() => navigate("/inmuebles/2")}
            />
          <ProjectBox
            img={Inmueble3}
            title="Centro"
            text="175.000 USD | 3 ambientes | Villa Urquiza"
            action={() => navigate("/inmuebles/3")}
          />
          <ProjectBox
            img={Inmueble4}
            title="Casa a estrenar"
            text="280.000 USD | 3 ambientes | Mataderos"
            action={() => navigate("/inmuebles/4")}
          />
          <ProjectBox
            img={Inmueble5}
            title="Casa a estrenar"
            text="235.000 USD | 4 ambientes | Hudson"
            action={() => navigate("/inmuebles/5")}
          />
          <ProjectBox
            img={Inmueble6}
            title="Departamento a estrenar"
            text="110.000 USD | 2 ambientes | Belgrano"
            action={() => navigate("/inmuebles/6")}
          />
        </GridContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Inmuebles;

const Wrapper = styled.section`
  padding: 150px 0;
  width: 100%;
  min-height: 700px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding-top: 40px;
`;
