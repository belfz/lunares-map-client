import styled from "styled-components";
import React from "react";
import { LunarArea } from "./LunarArea";
import mapBg from "../map-bg.png";
import { AllLunarAreaIds, MapEvents } from "../types/Lunares";

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;
  height: 100vh;
  background-image: url(${mapBg});
  background-repeat: round;
  position: relative;
`;

const ConnectionLostWarning = styled.h1`
  font-size: 60px;
  color: red;
  position: absolute;
  top: 50%; /* Position Y halfway in */
  left: 50%; /* Position X halfway in */
  transform: translate(-50%,-50%); /* Move it halfway back(x,y) */
`;

interface Props {
  events: MapEvents;
  isConnected: boolean;
}

export const Map = ({ events, isConnected }: Props) => {
  return (
    <MapContainer>
      {AllLunarAreaIds.map((id) => (
        <LunarArea
          id={id}
          key={id}
          objectives={events[id]?.objectives ?? []}
          warnings={events[id]?.warnings ?? []}
        />
      ))}
      {!isConnected && <ConnectionLostWarning>CONNECTION LOST</ConnectionLostWarning>}
    </MapContainer>
  );
};
