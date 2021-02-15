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

type LunarAreaId = "A1" | "A2" | "A3" | "A4" | "B1" | "B2" | "B3" | "B4";

const AllLunarAreaIds: LunarAreaId[] = [
  "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"
];

type MapEvents = {
  [key in LunarAreaId]?: {
    objectives?: string[];
    warnings?: string[];
  }
}

interface Props {
  events: MapEvents;
}

export const Map = ({ events }: Props) => {

  return (
    <MapContainer>
      {
        AllLunarAreaIds.map(id => <LunarArea id={id} key={id} objectives={events[id]?.objectives ?? []} warnings={events[id]?.warnings ?? []} />)
      }
    </MapContainer>
  )
};
