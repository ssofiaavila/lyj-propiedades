import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

//Icons
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function ServiciosSlider() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper>
          <FlashOnIcon fontSize="large" />
          <Text>Centrado y fiable</Text>
        </LogoWrapper>
        <LogoWrapper>
          <ContentPasteSearchIcon fontSize="large" />
          <Text>Documentacion detallada</Text>
        </LogoWrapper>
        <LogoWrapper>
          <TipsAndUpdatesIcon fontSize="large" />
          <Text>Trabajamos sobre tus ideas</Text>
        </LogoWrapper>
        <LogoWrapper>
          <ThumbUpIcon fontSize="large" />
          <Text>10 años de experiencia</Text>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 150px;
  cursor: pointer;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
`;
