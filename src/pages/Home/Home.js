import React from 'react';
import "./home.scss";

import heroImg from "../../assets/images/hero.png";

//category 
import Category from "../../components/Ui/category/Category";

//featureItem 
import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";

const featureData =[
    {
        title:"سریع ترین خدمات",
        imgUrl:featureImg01,
        desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
    },
    {
        title:"بهتریم کیفیت  ",
        imgUrl:featureImg02,
        desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"

        
    },
    {
        title:"  ضمانت برگشت وجه",
        imgUrl:featureImg03,
        desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"

    }
]


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

          
            <section>
                <Category />
            </section>

            <section>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 text-center home-3">
                            <h5>چه خدماتی ارایه میدهیم؟</h5>
                            <h2>در خانه و محل کار فقط با<span>یک کلیک</span></h2>
                        </div>
                            {
                                featureData.map((item,index)=>(
                                    <div className="col-sm-12 col-md-6 col-lg-4  text-center home-3">
                                        <div className="feature-item">
                                            <img src={item.imgUrl} alt="" />
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
     
                    </div>
                </div>
            </section>
            
        </div>
        
    );
};

export default Home;