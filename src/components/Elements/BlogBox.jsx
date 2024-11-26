import React from "react";
import styled from "styled-components";

export default function BlogBox({ title, text, author }) {
  return (
    <WrapperBtn className="animate pointer">
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13 extraBold">{author}</p>
        <p className="font13" style={{ padding: "20px 0" }}>
          {text}
        </p>
        <div className="flex"></div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
  min-height: 250px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
