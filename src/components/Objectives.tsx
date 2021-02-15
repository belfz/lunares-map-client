import styled from "styled-components";
import React from "react";

const ObjectivesContainer = styled.div`
  color: white;
  h3 {
    border: 1px solid white;
    border-radius: 10px;
    text-align: center;
    margin: 0 3rem;
    padding: 0.25rem;
  }
  ul {
    margin-top: 0.5rem;
    padding-left: 4rem;
  }
`;

interface Props {
  objectives: string[];
}

export const Objectives = ({ objectives }: Props) => {
  return objectives.length > 0 ? (
    <ObjectivesContainer>
          <h3>objectives 🎯</h3>
          <ul>
            {objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </ObjectivesContainer>
  ) : <React.Fragment />;
};
