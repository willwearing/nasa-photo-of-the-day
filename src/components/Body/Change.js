import React from "react";
import styled, { keyframes } from "styled-components";

const StyledChange = styled.button`
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  color: #fff;
  font-size: 18px;
  line-height: 160%;
  font-weight: 700;
  cursor: pointer;
  ax-width: 292px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-pack: center;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #000;
`;

const Change = (props) => {
  return (
    <StyledChange>Click here to change the Photo of the Day!</StyledChange>
  );
};

export default Change;
