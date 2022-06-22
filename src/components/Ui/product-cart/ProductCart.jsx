import React from 'react';
import "./productCart.scss";

import ProductImg from "../../../assets/images/product_2.1.jpg";
import {Link} from "react-router-dom";

//redux
import { useDispatch } from 'react-redux';
import {cartActions} from "../../../store/shopping-cart/cartSlice";

const ProductCart = (props) => {
    const {id,title,image01,price} = props.item;
    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(cartActions.addItem({
           id,
           title,
           image01,
           price 
        }))
    }

    return (
        <div className="product__item ">
            <div className="product-img ">
                <img className="w-50 " src={image01} alt="product__img"  />
            </div>

            <div className="product-countact">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="product__price">{price}<span>تومان</span></span>
                    <button className="addToCart__btn" onClick={addToCart}>اضافه کردن</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;