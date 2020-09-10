import React from "react";
import ReactDOM, { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme.js";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
