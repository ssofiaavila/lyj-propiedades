import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action} 
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#012136")};
  background-color: ${(props) => (props.border ? "transparent" : "#012136")};
  width: 100%;
  padding: 20px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#475468")};
    border: 1px solid ##475468;
    color: ${(props) => (props.border ? "#475468" : "#fff")};
  }
  font-size: 18px;
`;
