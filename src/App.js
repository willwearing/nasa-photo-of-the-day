import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Body/Title";
import Date from "./components/Body/Date";
import Change from "./components/Body/Change";
import Photo from "./components/Body/Photo";
import Description from "./components/Body/Description";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=R1mD9CtnHACs86ovGlEVGQRk2X1FNYtasNPigezx&date=${date}`
      )
      .then((response) => {
        const photoData = response.data;
        setPhoto(photoData);
      })
      .catch((error) => {
        console.log("error!", error);
        setDate("1990-02-10");
        alert("Wrong date entered - Try again!");
      });
  }, [date]);

  return (
    <StyledApp className="App">
      <Title title={photo.title} />
      <Date date={photo.date} />
      <Change date={date} setDate={setDate} />
      <Photo photo={photo.url} />
      <Description description={photo.explanation} />
    </StyledApp>
  );
}

export default App;
