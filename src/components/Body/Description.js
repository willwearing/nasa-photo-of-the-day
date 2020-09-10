import React from "react";
import styled, { keyframes } from "styled-components";

export default function Description(description) {
  console.log(description);
  return (
    <div>
      <p>{description.description}</p>
    </div>
  );
}
