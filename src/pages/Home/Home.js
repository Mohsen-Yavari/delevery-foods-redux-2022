import React from 'react';
import "./home.scss";

import heroImg from "../../assets/images/hero.png";



const Home = () => {
    return (
        <div className="container home">
            <div className="row home-1">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h5 className="mb-4">لورم ایپسوم متن ساختگی با تولید</h5>
                    <h1 className="mb-3">همش  <span> دلت<i class="ri-heart-fill"></i></span>بهئونه میگیره؟<span>غذای خوشمزه</span> رو امتحان کن</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید
                     سادگی نامفهوم از صنعت چاپ و با استفاده 
                    از طراحان گرافیک است چاپگرها و متون بلکه
                     روزنامه و مجله در ستون و سطرآنچنان که لازم است
                     </p>
                     <div className=" hero-btn d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                          سفارش بده<i class="ri-arrow-left-s-line"></i>
                    </button>
                    <button className="all-foods-btn">
                            مشاهده منو
                    </button>
             
            </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={heroImg} alt="" />
                </div>

                
            </div>

          
             
            
        </div>
    );
};

export default Home;