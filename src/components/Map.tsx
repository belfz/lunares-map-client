import styled from "styled-components"
import React from "react";

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;

  border: 1px solid black;
`;

export const Map = () => {
  return (
    <MapContainer>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </MapContainer>
  )
};
