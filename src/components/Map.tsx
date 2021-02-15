import styled from "styled-components"
import React from "react";
import { LunarArea } from "./LunarArea";
import mapBg from "../map-bg.png";

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  background-image: url(${mapBg});
  background-repeat: round;
`;

export const Map = () => {
  return (
    <MapContainer>
      <LunarArea id="A4" />
      <LunarArea id="A3" />
      <LunarArea id="A2" />
      <LunarArea id="A1" />
      <LunarArea id="B4" />
      <LunarArea id="B3" />
      <LunarArea id="B2" />
      <LunarArea id="B1" />
    </MapContainer>
  )
};
