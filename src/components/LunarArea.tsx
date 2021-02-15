import styled from "styled-components"
import React from "react";

const LunarAreaContainer = styled.div`
  border: 1px dashed gray;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  padding: .5rem;
`;

interface Props {
  id: string;
  title?: string;
}

export const LunarArea = ({ id }: Props) => {
  return (
    <LunarAreaContainer>
      <h2>{id}</h2>
    </LunarAreaContainer>
  )
};
