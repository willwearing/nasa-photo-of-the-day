import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled.div`
  &:hover {
    animation: ${rotate} 2s linear;
  }
`;

export default function Photo(photo) {
  return (
    <StyledImg>
      <img alt={photo.title} src={photo.photo}></img>
    </StyledImg>
  );
}
