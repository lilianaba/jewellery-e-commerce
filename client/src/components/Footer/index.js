import React from "react";
// import { Slide ,Fade} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  const socialMediaImages = [
    {
      image: "fa-brands fa-facebook",
      caption: "Facebook",
      link: "urllink",
    },
    {
      link: "url link",
      image: "fa-brands fa-instagram",
      caption: "Instagram",
    },
    {
      link: "url link",
      image: "fa-brands fa-youtube",
      caption: "YouTube",
    },
    {
      link: "url link Pinterest",
      image: "fa-brands fa-pinterest-p",
      caption: "Pinterest",
    },
  ];

  return (
    <footer>
      <div className="footer-container">
        <h1> THIS IS OUR FOOTER INFO</h1>
        <div className="logos">
          {socialMediaImages.map((item) => (
            <div className="card px-1 py-1" key={item._id}>
              <Link>
                <i className={`${item.image}`}></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
