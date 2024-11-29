import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FullButton from "../buttons/full-button";
import InmueblesDestacadosGrid from "../Elements/inmuebles-destacados-grid";

const Inmuebles = () => {
  const navigate = useNavigate();

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Inmuebles </h1>
            <p className="font20">
              Te presentamos algunos de los inmuebles destacados.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <InmueblesDestacadosGrid />
          </div>
          <div className="row textCenter"></div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Todos los inmuebles" action={() => navigate("/inmuebles")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Inmuebles;

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
