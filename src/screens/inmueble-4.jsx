import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Inmueble from "../assets/img/inmuebles/inmueble-4.jpg";

import Foto1 from "../assets/img/inmuebles/inmueble-4/1.jpg";
import Foto2 from "../assets/img/inmuebles/inmueble-4/2.jpg";
import Foto3 from "../assets/img/inmuebles/inmueble-4/3.jpg";
import InmuebleDetalle from "../components/sections/inmueble-detalle";

const Inmueble4 = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper className="container flexSpaceCenter">
        <InmuebleDetalle
          nombre="Casa a estrenar"
          precio={"208.000"}
          habitaciones={2}
          banios={1}
          descripcion={`Casa a estrenar en Mataderos, un barrio en constante crecimiento y con gran potencial. Esta propiedad ofrece un diseño moderno y funcional, con materiales de alta calidad que garantizan durabilidad y confort. Cuenta con amplios espacios tanto en el interior como en el exterior. Su ubicación permite un fácil acceso a medios de transporte, centros comerciales, y zonas de esparcimiento. Es la oportunidad perfecta para quienes buscan estrenar su hogar en una zona tranquila, pero con todas las comodidades cercanas.`}
          ubicacion={"Mataderos"}
          imagenPrincipal={Inmueble}
          imagen1={Foto1}
          imagen2={Foto2}
          imagen3={Foto3}
        />
      </Wrapper>
    </>
  );
};

export default Inmueble4;

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
