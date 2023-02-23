import React from "react";
import { Slide ,Fade} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const slideImages = [
    {
      url: "/images/banner.webp",
      caption: "Slide 1",
      align:"center",
    },
    {
      url: "/images/banner2.jpeg",
      caption: "Slide 2",
      align:"center",
    },
    
    {
      url: "/images/banner4.jpeg",
      caption: "Slide 4",
      align:"left",
    },
    {
      url: "/images/banner5.jpeg",
      caption: "Slide 5",
      align:"right",

    },
    {
      url: "/images/banner6.webp",
      caption: "Slide 6",
      align:"left",
    },
    {
      url: "/images/banner7.jpg",
      caption: "Slide 7",
      align:"center",
    },
    {
      url: "/images/banner8.webp",
      caption: "Slide 8",
      align:"center",
    },
    {
      url: "/images/banner9.jpg",
      caption: "Slide 9",
      align:"center",
    },
    {
      url: "/images/banner10.jpg",
      caption: "Slide 10",
      align:"left",
    },
    {
      url: "/images/banner11.jpg",
      caption: "Slide 11",
      align:"center",
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
              style={{ backgroundImage: `url(${slideImage.url})`,
                       backgroundPosition: `${slideImage.align}`}} 
    
            ></div>
          </div>
        ))}
        </Fade>
    </div>
  );
};

export default Banner;
