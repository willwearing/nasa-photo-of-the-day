import React from "react";

export default function Photo(photo) {
  return (
    <div>
      <img alt="Nasa Photo of the Day" src={photo.photo}></img>
    </div>
  );
}
