import React from "react";

export default function Photo(photo) {
  console.log(photo);
  return (
    <div>
      <img src={photo.photo}></img>
    </div>
  );
}
