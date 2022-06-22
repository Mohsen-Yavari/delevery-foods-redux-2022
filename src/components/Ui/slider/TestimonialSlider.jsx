import React from 'react';
import Slider from "react-slick";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
       <Slider{...settings}>
             <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div></div>
       </Slider>
    );
};

export default TestimonialSlider;