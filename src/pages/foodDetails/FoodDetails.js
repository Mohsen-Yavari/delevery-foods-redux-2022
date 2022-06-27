import React,{useState,useEffect} from 'react';

import "./foodDetails.scss";

import products from "../../assets/fake-data/products";
import {useParams} from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/Ui/common-section/CommonSection";

import ProductCart from "../../components/Ui/product-cart/ProductCart";

//redux
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/shopping-cart/cartSlice";


const FoodDetails = () => {

const {id} = useParams();
const [tab,setTab] = useState('desc');
const dispatch = useDispatch();

const product = products.find((product) => product.id === id);
const [previImg,setPreviImg] =useState(product.image01);
const { title, price, category, desc, image01 } = product;




const relatedProduct = products.filter((item) => category === item.category);

const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

useEffect(() => {
    setPreviImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
    return (
        <Helmet title="جزییات محصول ">
            <CommonSection title={title}/>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="product__img" >
                                <div className="img__items mb-2" onClick={()=> setPreviImg
                            (product.image01)}>
                                    <img src={product.image01} alt="" className="w-50" />
                                </div>
                                <div className="img__items mb-2" onClick={()=> setPreviImg
                            (product.image02)}>
                                    <img src={product.image02} alt=""  className="w-50"  />
                                </div>
                                <div className="img__items mb-2" onClick={()=> setPreviImg
                            (product.image03)}>
                                    <img src={product.image03} alt=""  className="w-50"  />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="product__main-img">
                            <img src={previImg} alt=""  className="w-100"  />

                            </div>
                        </div>


                        <div className="col-sm-6 col-md-6 col-lg-6 ">
                            <div className="single__product-countact">
                                <h2 className="product__title"> {title}</h2>
                                <span className="product__price">
                                    {" "}
                                    {price}<span>تومان</span></span>
                                <p>گروه: ؤ<span>{category}</span></p>

                                <button onClick={addItem} className="addToCart__btn">اضافه کردن</button>
                            </div>
                            
                        </div>

                        <div className="col-lg-12">
                            <div className="tabs d-flex align-items-center gap-5 py-2">
                                <h6 className={` ${tab === "desc" ? "tab__activs" : ""}`} onClick={()=>setTab('desc')}>
                                    توضیحات
                                    </h6>
                                <h6 className={` ${tab === "rev" ? "tab__activs" : ""}`}
                                onClick={()=>setTab('rev')}>مشخصات</h6>
                            </div>

                            {/* //change */}
                          {
                            tab === "desc" ?  <div className="tab__contact">
                                <p>{desc}</p>
                             </div> : <div className="tab__form">

                                   <div className="review mb-3">
                                     <p className="user__name mb-0">محسن یاوری</p>  
                                     <p className="user__email mb-0">mohsenyavari713@gmail.com</p>  
                                     <p className="feedback__text">محصولات عالی</p>  
                                   </div>
                                   <div className="review">
                                     <p className="user__name mb-0">محسن یاوری</p>  
                                     <p className="user__email mb-0">mohsenyavari713@gmail.com</p>  
                                     <p className="feedback__text">محصولات عالی</p>  
                                   </div>
                                   <div className="review">
                                     <p className="user__name mb-0">محسن یاوری</p>  
                                     <p className="user__email mb-0">mohsenyavari713@gmail.com</p>  
                                     <p className="feedback__text">محصولات عالی</p>  
                                   </div>
                                   <div className="form">
                                       <div className="form__grop">
                                           <input type="text" placeholder="نام خود را وارد کنید" />
                                       </div>
                                       <div className="form__grop">
                                           <input type="text" placeholder="ایمیل را وارد کنید" />
                                       </div>
                                       <div className="form__grop">
                                           <textarea 
                                           rows={3}
                                           type="text" placeholder="توضیحات" />
                                       </div>
       
                                       <button type="submit" className="addToCart__btn" >ارسال</button>
                                   </div>
                               </div>
                   
                          }
                           

                   
                        </div>

                        <div className="col-lg-12 mb-5 mt-5">
                            <h2 className="related__Product-title">علاقه مندی ها</h2>
                        </div>

                        {
                            relatedProduct.map(item =>(
                                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                                    <ProductCart item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default FoodDetails;