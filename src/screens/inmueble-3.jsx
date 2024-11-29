import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Inmueble from "../assets/img/inmuebles/inmueble-3.jpg";

import Foto1 from "../assets/img/inmuebles/inmueble-3/1.jpeg";
import Foto2 from "../assets/img/inmuebles/inmueble-3/2.jpg";
import Foto3 from "../assets/img/inmuebles/inmueble-3/3.jpg";
import InmuebleDetalle from "../components/sections/inmueble-detalle";

const Inmueble3 = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper className="container flexSpaceCenter">
        <InmuebleDetalle
          nombre="Centro"
          precio={"175.000"}
          habitaciones={2}
          banios={1}
          descripcion={`Esta casa de 2 habitaciones y 1 baño está ubicado en el corazón de Villa Urquiza, uno de los barrios más tranquilos y mejor conectados de la ciudad. Con un diseño funcional y espacios bien distribuidos, ofrece el lugar perfecto para vivir cómodamente. La propiedad se encuentra cerca de plazas, comercios, y opciones de transporte público, lo que la convierte en una opción ideal para quienes buscan una vida tranquila sin perder la cercanía a todos los servicios que ofrece la zona. Una excelente oportunidad para quienes desean mudarse a un barrio residencial, a solo unos minutos de la vibrante vida urbana`}
          ubicacion={"Villa Urquiza"}
          imagenPrincipal={Inmueble}
          imagen1={Foto1}
          imagen2={Foto2}
          imagen3={Foto3}
        />
      </Wrapper>
    </>
  );
};

export default Inmueble3;

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
