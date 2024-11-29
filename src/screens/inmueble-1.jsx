import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Inmueble from "../assets/img/inmuebles/inmueble-1.jpg";

import Foto1 from "../assets/img/inmuebles/inmueble-1/1.jpg";
import Foto2 from "../assets/img/inmuebles/inmueble-1/2.jpg";
import Foto3 from "../assets/img/inmuebles/inmueble-1/3.jpg";
import InmuebleDetalle from "../components/Sections/inmueble-detalle";

const Inmueble1 = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper className="container flexSpaceCenter">
        <InmuebleDetalle
          nombre="Chalet adosado"
          precio={"150.000"}
          habitaciones={2}
          banios={1}
          descripcion={`Encantador chalet adosado, ubicado en una de las zonas más cotizadas
  de San Isidro, perfecto para quienes buscan comodidad y estilo. Con 3
  amplios ambientes, ofrece un espacio ideal para vivir en familia,
  disfrutar de la tranquilidad y la proximidad a servicios esenciales.
  La propiedad cuenta con un diseño funcional y acogedor, que combina lo
  mejor de la modernidad con un ambiente cálido. Ubicado en un barrio
  tranquilo, con fácil acceso a transportes, centros comerciales y
  escuelas, este chalet es la opción ideal para quienes desean vivir en
  una zona exclusiva de San Isidro. No dejes pasar la oportunidad de
  hacer de este hermoso chalet tu nuevo hogar.`}
          ubicacion={"San Isidro"}
          imagenPrincipal={Inmueble}
          imagen1={Foto1}
          imagen2={Foto2}
          imagen3={Foto3}
        />
      </Wrapper>
    </>
  );
};

export default Inmueble1;

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
