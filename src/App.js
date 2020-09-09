import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Body/Title";
import Photo from "./components/Body/Photo";
import Description from "./components/Body/Description";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=R1mD9CtnHACs86ovGlEVGQRk2X1FNYtasNPigezx`
      )
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }, []);
  console.log(photo);
  return (
    <div className="App">
      <Title title={photo.title} />
      <Photo photo={photo.url} />
      <Description description={photo.explanation} />
    </div>
  );
}

export default App;
