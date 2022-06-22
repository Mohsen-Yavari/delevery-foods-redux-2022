import React from 'react';
import "./testimonialSlider.scss";

import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed:1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
       <Slider{...settings}>
             <div>
                <p className="rewiw_text">
                لورم ایپسوم متن ساختگی
                 با تولید سادگی نامفهوم از صنعت چاپ
                 و با استفاده از طراحان گرافیک است
                 چاپگرها و متون بلکه روزنامه و مجله
                 در ستون و سطرآنچنان که لازم است و 
                برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
                <div className="d-flex align-items-center gap-3">
                    <img src={ava01} alt="" className="w-25 rounded" />
                    <h6>محمد صلاح</h6>
                </div>
             </div>
             <div>
                <p className="rewiw_text">
                لورم ایپسوم متن ساختگی
                 با تولید سادگی نامفهوم از صنعت چاپ
                 و با استفاده از طراحان گرافیک است
                 چاپگرها و متون بلکه روزنامه و مجله
                 در ستون و سطرآنچنان که لازم است و 
                برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
                <div className="d-flex align-items-center gap-3">
                    <img src={ava02} alt="" className="w-25 rounded" />
                    <h6> شیما سراجی</h6>
                </div>
             </div>
             <div>
                <p className="rewiw_text">
                لورم ایپسوم متن ساختگی
                 با تولید سادگی نامفهوم از صنعت چاپ
                 و با استفاده از طراحان گرافیک است
                 چاپگرها و متون بلکه روزنامه و مجله
                 در ستون و سطرآنچنان که لازم است و 
                برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
                <div className="d-flex align-items-center gap-3">
                    <img src={ava03} alt="" className="w-25 rounded" />
                    <h6>یحقوب صلاح</h6>
                </div>
             </div>
          
       </Slider>
    );
};

export default TestimonialSlider;