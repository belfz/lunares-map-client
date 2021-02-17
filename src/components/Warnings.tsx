import styled from "styled-components";
import React from "react";

const WarningsContainer = styled.div`
  color: #fe2826;
  margin-bottom: 1rem;
  h3 {
    border: 1px solid #fe2826;
    border-radius: 10px;
    text-align: center;
    margin: 0 10%;
    padding: 0.25rem;
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
  font-size: 36px;
`;

interface Props {
  warnings: string[];
}

export const Warnings = ({ warnings }: Props) => {
  return warnings.length > 0 ? (
    <WarningsContainer>
      <h3>warnings 🚨</h3>
      <WarningsListing>
        {warnings.map((wrn, idx) => (
          <Warning key={idx}>{wrn}</Warning>
        ))}
      </WarningsListing>
    </WarningsContainer>
  ) : <React.Fragment />;
};
