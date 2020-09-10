import React from "react";
import styled, { keyframes } from "styled-components";

const StyledTitle = styled.div`
  color: ${(pr) => pr.theme.black};
  &:hover {
    background-color: ${(pr) => pr.theme.otherColor};
  }
`;

export default function Title(title) {
  return (
    <StyledTitle>
      <h1>{title.title}</h1>
    </StyledTitle>
  );
}
