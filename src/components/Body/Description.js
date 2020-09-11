import React from "react";
import styled, { keyframes } from "styled-components";

const StyledDescription = styled.div`
  color: ${(pr) => pr.theme.black};
  width: ${(pr) => pr.theme.imgWidth};
  margin: 0 auto;
  &:hover {
    background-color: ${(pr) => pr.theme.otherColor};
  }
`;

export default function Description(description) {
  // console.log(description);
  return (
    <StyledDescription>
      <p>{description.description}</p>
    </StyledDescription>
  );
}
