import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Inmueble from "../assets/img/inmuebles/inmueble-2.jpg";

import Foto1 from "../assets/img/inmuebles/inmueble-2/1.jpg";
import Foto2 from "../assets/img/inmuebles/inmueble-2/2.jpg";
import Foto3 from "../assets/img/inmuebles/inmueble-2/3.jpg";
import InmuebleDetalle from "../components/Sections/inmueble-detalle";

const Inmueble2 = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper className="container flexSpaceCenter">
        <InmuebleDetalle
          nombre="Moderna"
          precio={"240.000"}
          habitaciones={4}
          banios={2}
          descripcion={`Esta casa de construcción moderna, ubicada en el corazón de La Plata, es la opción ideal para quienes buscan confort, estilo y funcionalidad. Con 4 amplias habitaciones y 2 baños completos, ofrece el espacio perfecto para familias que valoran la comodidad y la privacidad. La propiedad destaca por su diseño contemporáneo, con acabados de alta calidad que brindan un ambiente cálido y acogedor. Las habitaciones son luminosas y ventiladas, creando espacios ideales para el descanso y el trabajo. La cocina, completamente equipada, se integra perfectamente con el comedor y la sala de estar, creando un área social ideal para compartir momentos en familia.
El exterior cuenta con un amplio jardín y un espacio para el estacionamiento, mientras que la ubicación ofrece fácil acceso a centros comerciales, escuelas y transporte público. Además, la propiedad se encuentra en una zona tranquila y residencial, perfecta para quienes buscan vivir en una de las ciudades más exclusivas de la región.
`}
          ubicacion={"La Plata"}
          imagenPrincipal={Inmueble}
          imagen1={Foto1}
          imagen2={Foto2}
          imagen3={Foto3}
        />
      </Wrapper>
    </>
  );
};

export default Inmueble2;

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
