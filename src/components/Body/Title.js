import React from "react";
import styled, { keyframes } from "styled-components";

const StyledTitle = styled.div`
  color: ${(pr) => pr.theme.black};
  &:hover {
    background-color: ${(pr) => pr.theme.otherColor};
  }
`;

const Title = (props) => {
  return (
    <StyledTitle>
      <h1>NASA's Photo of the Day: {props.title}</h1>
    </StyledTitle>
  );
};

export default Title;
