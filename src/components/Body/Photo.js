import React from "react";
import styled, { keyframes } from "styled-components";

export default function Photo(photo) {
  console.log(photo);
  return (
    <div>
      <img alt={photo.title} src={photo.photo}></img>
    </div>
  );
}
