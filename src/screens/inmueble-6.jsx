import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Inmueble from "../assets/img/inmuebles/inmueble-6.jpg";

import Foto1 from "../assets/img/inmuebles/inmueble-6/1.jpg";
import Foto2 from "../assets/img/inmuebles/inmueble-6/2.jpg";
import Foto3 from "../assets/img/inmuebles/inmueble-6/3.jpeg";
import InmuebleDetalle from "../components/Sections/inmueble-detalle";

const Inmueble6 = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper className="container flexSpaceCenter">
        <InmuebleDetalle
          nombre="Departamento a estrenar"
          precio={"110.000"}
          habitaciones={1}
          banios={1}
          descripcion={`Este elegante departamento a estrenar en el corazón de Belgrano es la opción ideal para quienes buscan vivir en una de las zonas más exclusivas y cotizadas de la ciudad. Con un diseño moderno y detalles de alta calidad, este departamento ofrece un ambiente luminoso y amplio, perfecto para disfrutar de la comodidad y el estilo. Con 2 habitaciones y 1 baño, la propiedad se destaca por su distribución funcional, ideal para parejas, jóvenes profesionales o pequeñas familias. Además, su ubicación privilegiada te permite acceder rápidamente a una gran variedad de servicios, transportes, restaurantes, y espacios verdes. No pierdas la oportunidad de vivir en Belgrano, un barrio que combina la tranquilidad de zonas residenciales con la cercanía a todo lo que necesitas.`}
          ubicacion={"Belgrano"}
          imagenPrincipal={Inmueble}
          imagen1={Foto1}
          imagen2={Foto2}
          imagen3={Foto3}
        />
      </Wrapper>
    </>
  );
};

export default Inmueble6;

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
