import styled from "styled-components"
import React from "react";

const LunarAreaContainer = styled.div`
  border: 1px dashed gray;
  display: flex;
  flex-direction: column;
  padding: 1rem .5rem .5rem .5rem;
`;

const LunarAreaIdMarker = styled.h2`
  margin-top: auto;
  align-self: flex-end;
`;

const Objectives = styled.div`
  color: black;
`;

const Warnings = styled.div`
  color: red;
`;

interface Props {
  id: string;
  objectives: string[];
  warnings: string[];
}

export const LunarArea = ({ id, objectives, warnings }: Props) => {
  return (
    <LunarAreaContainer>
      {objectives.length > 0 && (
        <Objectives>
          <h3>objectives</h3>
          <ul>
            {objectives.map((obj, idx) => <li key={idx}>{obj}</li>)}
          </ul>
        </Objectives>
      )}
      {warnings.length > 0 && (
        <Warnings>
          <h3>warnings</h3>
          <ul>
            {warnings.map((wrn, idx) => <li key={idx}>{wrn}</li>)}
          </ul>
        </Warnings>
      )}
      <LunarAreaIdMarker>{id}</LunarAreaIdMarker>
    </LunarAreaContainer>
  )
};
