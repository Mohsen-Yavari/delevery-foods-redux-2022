import React from 'react';
import "./productCart.scss";

import ProductImg from "../../../assets/images/product_2.1.jpg";
import {Link} from "react-router-dom";



const ProductCart = (props) => {
    const {id,title,image01,price} = props.item
    return (
        <div className="product__item ">
            <div className="product-img ">
                <img className="w-50 " src={image01} alt="product__img"  />
            </div>

            <div className="product-countact">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div>
                    <span className="product__price">{price}تومان</span>
                    <button className="addToCart__btn">اضافه کردن</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;