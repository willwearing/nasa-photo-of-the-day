import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`

`;

const StyledImg = styled.div``;

export default function Photo(photo) {
  return (
    <StyledImg>
      <img alt={photo.title} src={photo.photo}></img>
    </StyledImg>
  );
}
