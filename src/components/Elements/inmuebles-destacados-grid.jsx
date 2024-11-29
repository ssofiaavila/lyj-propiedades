import ProjectBox from "./ProjectBox";
import Inmueble1 from "../../assets/img/inmuebles/inmueble-1.jpg";
import Inmueble2 from "../../assets/img/inmuebles/inmueble-2.jpg";
import Inmueble3 from "../../assets/img/inmuebles/inmueble-3.jpg";
import { useNavigate } from "react-router-dom";


const InmueblesDestacadosGrid = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <ProjectBox
          img={Inmueble1}
          title="Chalet adosado"
          text="150.000 USD | 3 ambientes | San Isidro"
          action={() => navigate("/inmuebles/1")}
        />
      </div>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <ProjectBox
          img={Inmueble2}
          title="Moderna"
          text="240.000 USD | 5 ambientes | La Plata"
          action={() => navigate("/inmuebles/2")}
        />
      </div>

      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <ProjectBox
          img={Inmueble3}
          title="Centro"
          text="175.000 USD | 3 ambientes | Villa Urquiza"
          action={() => navigate("/inmuebles/3")}
        />
      </div>
    </>
  );
};

export default InmueblesDestacadosGrid;
