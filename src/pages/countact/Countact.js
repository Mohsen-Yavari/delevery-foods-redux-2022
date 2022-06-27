import React from 'react';
import "./countact.scss";
import image01 from "../../assets/images/ava-1.jpg";
import image02 from "../../assets/images/ava-2.jpg";
import image03 from "../../assets/images/ava-3.jpg";

import  TestimonialSlider from "../../components/Ui/slider/TestimonialSlider";

const Countact = () => {
    return (
        <section>
            <div className="container">
               <div className="row">
                <div className="col">
                    <h1>تیم پشتیبانی و خبره ترین کارشناسان ما</h1>
                    <h6>
                    لورم ایپسوم متن ساختگی با
                     تولید سادگی نامفهوم از صنعت چاپ و با
                     استفاده از طراحان گرافیک است چاپگرها
                     و متون بلکه روزنامه و مجله در ستون و 
                    سطرآنچنان که لازم است و برای شرایط فعلی
                     تکنولوژی مورد نیاز و کاربردهای متنوع
                     با هدف بهبود ابزارهای کاربردی می باشد
                    </h6>
                </div>
                <div className="col mt-5">
                 

                        <TestimonialSlider  />


                  
                    </div>
                </div>
            
            </div>
        </section>

    );
};

export default Countact;