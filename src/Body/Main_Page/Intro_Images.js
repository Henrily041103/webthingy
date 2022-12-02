import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import { IntroImage } from "resource_getter";

function renderAll() {
  var img_list = [];
  for (const i in IntroImage) {
    img_list.push(
      <Carousel.Item key={i}>{renderPic(IntroImage[i])}</Carousel.Item>
    );
  }
  return img_list;
}

function renderPic(image) {
  return <img className="Main_Page_Carousel_Image" src={image}></img>;
}

function Intro_Images() {
  return (
    <Carousel variant="dark" controls={false} id="mp_carousel">
      {renderAll()}
    </Carousel>
  );
}

export default Intro_Images;
