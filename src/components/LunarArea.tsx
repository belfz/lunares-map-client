import styled from "styled-components"
import React from "react";

const LunarAreaContainer = styled.div`
  border: 1px dashed gray;
  display: flex;
  flex-direction: column;
  padding: 2rem .5rem .5rem .5rem;
  color: white;
`;

const LunarAreaIdMarker = styled.h2`
  margin-top: auto;
  align-self: flex-end;
`;

const Objectives = styled.div`
  color: white;
  h3 {
    border: 1px solid white;
    border-radius: 10px;
    text-align: center;
    margin: 0 3rem;
    padding: .25rem;
  }
  ul {
    margin-top: 0.5rem;
    padding-left: 4rem;
  }
`;

const Warnings = styled.div`
  color: #FE2826;
  margin-bottom: 1rem;
  h3 {
    border: 1px solid #FE2826;
    border-radius: 10px;
    text-align: center;
    margin: 0 3rem;
    padding: .25rem;
  }
`;

const WarningsListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const Warning = styled.h1`
  font-size: 48px;
`;

interface Props {
  id: string;
  objectives: string[];
  warnings: string[];
}

export const LunarArea = ({ id, objectives, warnings }: Props) => {
  return (
    <LunarAreaContainer>
      {warnings.length > 0 && (
        <Warnings>
          <h3>warnings 🚨</h3>
          <WarningsListing>
            {warnings.map((wrn, idx) => <Warning key={idx}>{wrn}</Warning>)}
          </WarningsListing>
        </Warnings>
      )}
      {objectives.length > 0 && (
        <Objectives>
          <h3>objectives 🎯</h3>
          <ul>
            {objectives.map((obj, idx) => <li key={idx}>{obj}</li>)}
          </ul>
        </Objectives>
      )}
      <LunarAreaIdMarker>{id}</LunarAreaIdMarker>
    </LunarAreaContainer>
  )
};
