import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Banner = () => {      
      const slideImages = [
        {
          url: '/images/banner.webp', 
          caption: 'Slide 1'
        },
        {
          url: '/images/banner2.jpeg',
          caption: 'Slide 2'
        },
        {
          url: '/images/banner4.jpeg',
          caption: 'Slide 4'
        },
        {
          url: '/images/banner5.jpeg',
          caption: 'Slide 5'
        },    
      ];

    const properties = {
        arrows: false, 
        autoplay: true, 
        duration: 3000
    }

    return (
      <div className="slide-container">
       <Slide { ...properties }>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div id="banner-image" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Banner; 