import './style.css';

import React from "react";
// import { Slide ,Fade} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaImages = [
    {
      image: "fa-brands fa-facebook",
      caption: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      link: "https://www.instagram.com/",
      image: "fa-brands fa-instagram",
      caption: "Instagram",
    },
    {
      link: "https://www.youtube.com/",
      image: "fa-brands fa-youtube",
      caption: "You Tube",
    },
    {
      link: "https://www.pinterest.com/",
      image: "fa-brands fa-pinterest-p",
      caption: "Pinterest",
    },
  ];

  return (
    // <footer>
      <div className="footer-container">
        <h1> Bellagio Jewellery © 2023 </h1>
        <h3> Powered by Stripe </h3>
        <div className="logos">
          {socialMediaImages.map((item) => (
            <div className="card px-1 py-1" key={item.caption}>
              <Link to={`${item.link}`} target="_blank">
                <i className={`${item.image}`}></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    // </footer>
  );
};

export default Footer;
