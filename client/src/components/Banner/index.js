import React from "react";
import { Slide ,Fade} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const slideImages = [
    {
      url: "/images/banner.webp",
      caption: "Slide 1",
    },
    {
      url: "/images/banner2.jpeg",
      caption: "Slide 2",
    },
    {
      url: "/images/banner4.jpeg",
      caption: "Slide 4",
    },
    {
      url: "/images/banner5.jpeg",
      caption: "Slide 5",
    },
  ];

  const properties = {
    arrows: false,
    autoplay: true,
    duration: 3000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    },
  };

  return (
    <div className="slide-container">
        <Fade {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              id="banner-image"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
        </Fade>
    </div>
  );
};

export default Banner;
