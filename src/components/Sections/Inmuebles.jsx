import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../buttons/full-button";

// Assets

import InmueblesDestacadosGrid from "../elements/inmuebles-destacados-grid";

const Inmuebles = () => {
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
              <FullButton title="Ver más" action={() => alert("clicked")} />
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
