import React, { useState } from "react";
import "../Crousal/Crousal.css";
import Carousel from "react-bootstrap/Carousel";

const Crousal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imageInfo = [
    {
      title: "Our Joy is Fly",
      discription:
        "LorePariatur labore esse ex officia ad aliqua dolor non occaecat officia ullamco.",
      button: "Read More",
      link:
        "https://res.cloudinary.com/di23q5uen/image/upload/v1589122505/icons/15-153303_brick-wall-wallpaper-high-resolution-wall-bricks_fnryb5.jpg",
    },
    {
      title: "Project made with Love",
      discription:
        "Pariatur non esse mollit tempor exercitation consequat ut. Id velit sit eiusmod quis magna. Incididunt pariatur nostrud aute Lorem sint reprehend",
      button: "Read More",
      link:
        "https://res.cloudinary.com/di23q5uen/image/upload/v1589122613/icons/8044ae75dde6f46306e752770a0aec7b_grznan.jpg",
    },
    {
      title: "Our Joy is Fly",
      discription:
        "LorePariatur labore esse ex officia ad aliqua dolor non occaecat officia ullamco.",
      button: "Read More",
      link:
        "https://res.cloudinary.com/di23q5uen/image/upload/v1589122688/icons/52af290b92495132cd3eec2d5615dbad_qxk7a0.jpg",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imageInfo.map((element, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={element.link} alt="First slide" style={{backgroundSize:'cover'}}/>
          <Carousel.Caption>
            <h3>{element.title}</h3>
            <p>{element.discription}</p>
            <button>{element.button}</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Crousal;
