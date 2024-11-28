import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <Wrapper>
      <ImgBtn
        className="animate pointer"
        onClick={action}
      >
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font15">{text}</p>
      <DetailButton
        className="font15 pointer"
        onClick={() => action() }
      >
        Ver más
      </DetailButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 350px;
  padding: 15px;
  border-radius: 8px;
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 200px; 
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  :hover > img {
    opacity: 0.8;
  }
`;

const DetailButton = styled.button`
  margin-top: 10px;
  background-color: #012136;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #475468;
  }
`;
