import TopNavbar from "../components/nav/top-nav-bar";
import styled from "styled-components";
import Inmueble from "../assets/img/inmuebles/inmueble-4.jpg";

import Foto1 from "../assets/img/inmuebles/inmueble-5/1.jpeg";
import Foto2 from "../assets/img/inmuebles/inmueble-5/2.jpg";
import Foto3 from "../assets/img/inmuebles/inmueble-5/3.jpg";
import InmuebleDetalle from "../components/sections/inmueble-detalle";

const Inmueble5 = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper className="container flexSpaceCenter">
        <InmuebleDetalle
          nombre="Casa a estrenar"
          precio={"235.000"}
          habitaciones={3}
          banios={1}
          descripcion={`Descubrí esta hermosa casa a estrenar en el barrio Las Golondrinas,  Hudson. Con 3 habitaciones amplias y luminosas, esta propiedad fue diseñada pensando en la comodidad y el estilo. Ubicada en una zona rodeada de naturaleza, ofrece el espacio perfecto para quienes buscan un hogar moderno,. La casa cuenta con materiales de alta calidad y un diseño funcional que maximiza el aprovechamiento del espacio. Disfruta de un amplio jardín y de la cercanía a zonas comerciales y de esparcimiento. ¡Haz realidad tu sueño de vivir en un barrio exclusivo y en constante crecimiento!`}
          ubicacion={"Hudson"}
          imagenPrincipal={Inmueble}
          imagen1={Foto1}
          imagen2={Foto2}
          imagen3={Foto3}
        />
      </Wrapper>
    </>
  );
};

export default Inmueble5;

const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
