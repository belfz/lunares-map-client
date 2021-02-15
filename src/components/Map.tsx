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
      <LunarArea id="A4" objectives={["collect a sample", "something else"]} warnings={["seismic activity"]} />
      <LunarArea id="A3" objectives={[]} warnings={["seismic activity"]} />
      <LunarArea id="A2" objectives={[]} warnings={[]} />
      <LunarArea id="A1" objectives={[]} warnings={["aliens blocking the door"]} />
      <LunarArea id="B4" objectives={[]} warnings={[]} />
      <LunarArea id="B3" objectives={[]} warnings={[]} />
      <LunarArea id="B2" objectives={[]} warnings={[]} />
      <LunarArea id="B1" objectives={[]} warnings={[]} />
    </MapContainer>
  )
};
