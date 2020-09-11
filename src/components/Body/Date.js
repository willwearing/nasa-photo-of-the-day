import React from "react";
import styled, { keyframes } from "styled-components";

const StyledDate = styled.div`
  color: ${(pr) => pr.theme.black};
  &:hover {
    background-color: ${(pr) => pr.theme.otherColor};
  }
  margin-bottom: 2.5%;
`;

const Date = (props) => {
  return <StyledDate>Todays Date: {props.date}</StyledDate>;
};

export default Date;
