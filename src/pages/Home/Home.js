import React,{useState,useEffect} from 'react';
import "./home.scss";

import heroImg from "../../assets/images/hero.png";

//category 
import Category from "../../components/Ui/category/Category";

//featureItem 
import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";

  //papular-section
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";

import products from "../../assets/fake-data/products";

import ProductCart from "../../components/Ui/product-cart/ProductCart";

// whyImg section
import whyImg from "../../assets/images/location.png";

//testimonial section
import networkImg from "../../assets/images/network.png";
import TestimonialSlider from "../../components/Ui/slider/TestimonialSlider";

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

    const [category,setCategory] = useState("ALL");
    const [allProducts,setAllProducts] = useState(products);

    // hot pitza section
    const [hotPitzza,setHotPitzza] = useState([]);
    
    useState(()=>{
        const filtredPitzza = products.filter(item =>item.category === "پیتزا")
        const slicePitzza = filtredPitzza.slice(0,4)
        setHotPitzza(slicePitzza)
    },[])


    useEffect (() => {
        if(category === "ALL"){
            setAllProducts(products);
        }

        if(category === "برگر"){
            const filteredProducts = products.filter(
                (item) => item.category === "برگر"
                );

                setAllProducts(filteredProducts);
        }
        if(category === "پیتزا"){
            const filteredProducts = products.filter(
                (item) => item.category === "پیتزا"
                );

                setAllProducts(filteredProducts);
        }
        if(category === "نان"){
            const filteredProducts = products.filter(
                (item) => item.category === "نان"
                );

                setAllProducts(filteredProducts);
        }
        
    },[category])

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
                                    <div className="col-sm-12 col-md-6 col-lg-4  text-center home-3 mt-5" key={index}>
                                        <div className="feature-item">
                                            <img src={item.imgUrl} alt="" className="w-50 mb-3" />
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
     
                    </div>
                </div>
            </section>

            
            {/* PapularFoods section */}
            <section>
            <div className="container pupular">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2>معروف ترین ها</h2>
            </div>

            <div className="col-lg-12">
                <div className="food__category w-100  d-flex align-items-center justify-content-center gap-5">
                    <button className={`all__btn ${category === "ALL" ? 
                    "foodBtnActive" : ""}`} 
                    onClick={()=>
                    setCategory("ALL")
                    }>همه</button>
                    <button className={`all__btn ${category === "برگر" ? 
                    "foodBtnActive" : ""}`} 
                   onClick={()=>setCategory("برگر")}
                    ><img src={foodCategoryImg01} alt="" />برگر</button>
                    <button className={`all__btn ${category === "پیتزا" ? 
                    "foodBtnActive" : ""}`}
                       onClick={()=>setCategory("پیتزا")}
                    ><img src={foodCategoryImg02} alt="" />پیتزا</button>
                    <button className={`all__btn ${category === "نان" ? 
                    "foodBtnActive" : ""}`}
                    onClick={()=>setCategory("نان")}
                    ><img src={foodCategoryImg03} alt="" />نان</button>
                </div>
            </div>
                
                {
                    allProducts.map((item)=>(
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-5 " key={item.id}>
                             <ProductCart item={item} />
                        </div>
                    ))
                }
           

            </div>
            </div>
            </section>


                {/* whyImg section */}
            <section>
                <div className="container why">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="why__testy-react">
                                <h2 className="teasty">چرا <span>غذای</span> ما؟؟؟؟؟؟</h2>
                                <p>
                                لورم ایپسوم متن ساختگی با تولید
                                 سادگی نامفهو
                                 م از صنعت چاپ، و با استفاده از ط
                                 راحان گرافیک است، چاپگرها و متون 
                                 بلکه روزنامه و مجله در ستون و سط
                                 رآنچنان که لازم است، و برای شرایط
                                 
                                  فعلی تکنولوژی مورد نیاز، و کارب
                                 ردهای متنوع با هدف بهبود ابزارها
                                 ی کاربردی می باشد، کتابهای زیادی 
                                 در شصت و سه درصد گذشته حال و آین
                                 ده، شناخت فراوان جامعه و متخصصان 
                                 را می طلبد، تا با نرم افزارها شن
                                 
                                 اخت بیشتری را برای طراحان رایانه 
                                 ای علی الخصوص طراحان خلاقی، و فره
                                 نگ پیشرو در زبان فارسی ایجاد کرد،
                                  در این صورت می توان امید داشت ک
                                 ه تمام و دشواری موجود در ارائه ر
                                 اهکارها، و شرایط سخت تایپ به پای
                                 ان رسد و زمان مورد نیاز شامل حرو
                                 
                                 فچینی دستاوردهای اصلی، و جوابگوی
                                  سوالات پیوسته اهل دنیای موجود طر
                                 احی اساسا مورد استفاده قرار گیرد.
                                </p>

                                     
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src={whyImg} alt=""className="w-100" />

                        </div>
                    </div>
                </div>
            </section>


                {/* hot pitza section */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h1>پیتزای داغ</h1>
                        </div>
                        {
                            hotPitzza.map((item)=>(
                                <siv className="col-sm-12 col-md-4 col-lg-3" key={item.id}>
                                    <ProductCart item={item} />
                                </siv>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* tetimonial section */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="testimonial">
                            <h5 className="testimonial-subTitle mb-4">
                            گواهینامه ها
                            </h5>
                            <h2 className="testimonial-title mb-4">
                                معتبرترین مدارک <span> اشپزی </span>در سطح <span>بین المللی</span>
                            </h2>
                            <p className="testimonial-desc">
                            لورم ایپسوم متن ساختگی با تولید سادگی
                             نامفهوم از صنعت چاپ و با استفاده از طراحان 
                            گرافیک است چاپگرها و متون بلکه روزنامه
                             و مجله در ستون و سطرآنچنان که لازم است 
                            و برای شرایط فعلی تکنولوژی مورد نیاز
                            </p>
                                <TestimonialSlider />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={networkImg} alt="" className="w-100 mt-5" />
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
        
    );
};

export default Home;