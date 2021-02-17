import styled from "styled-components";
import React from "react";
import { Warnings } from "./Warnings";
import { Objectives } from "./Objectives";

const LunarAreaContainer = styled.div`
  border: 1px dashed gray;
  display: flex;
  flex-direction: column;
  padding: 5% 0.5rem 0.5rem 0.5rem;
  color: white;
`;

const LunarAreaIdMarker = styled.h2`
  margin-top: auto;
  align-self: flex-end;
`;

interface Props {
  id: string;
  objectives: string[];
  warnings: string[];
}

export const LunarArea = ({ id, objectives, warnings }: Props) => {
  return (
    <LunarAreaContainer>
      <Warnings warnings={warnings} />
      <Objectives objectives={objectives} />
      <LunarAreaIdMarker>{id}</LunarAreaIdMarker>
    </LunarAreaContainer>
  );
};
