import React from 'react';
import "./footer.scss";
import {Link} from 'react-router-dom';
import logo from "../../assets/images/res-logo.png";

const Footer = () => {
    return (
        <div className="container footer">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <Link to="/" className="navbar-brand  " > 
                    <img src={logo} alt="" className="logo" />
   
                    </Link>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                        <p className="footer-text">لورم ایپسوم متن ساختگی</p>
                        <p className="footer-text">لورم ایپسوم متن ساختگی</p>
                        <p className="footer-text">لورم ایپسوم متن ساختگی</p>
                        <p className="footer-text">لورم ایپسوم متن ساختگی</p>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 footer-contact">
                    <h1>راه ارتباطی</h1>
                    <p>ادرس:ایران-تهران-قیام</p>
                    <h5>تلفن<span>+12345678901</span></h5>
                    <h5>ایمیل<span>mb2@gmail.com</span></h5>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h1>خبرنامه</h1>
                    <div className="input-counter">
                        <input type="text" placeholder='ایمیل' />
                        <button>
                        <i class="ri-send-plane-line"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row footer-buttom">
    
                <p>کلیه حقوق برای محسن یاوری محفوظ است 2022</p>

         
            </div>
        </div>
    );
};

export default Footer;