import React from 'react';
import "./cartItem.scss";
import { ListGroupItem } from "reactstrap";import productImg from "../../../assets/images/product_01.1.jpg";

const CartItem = () => {
    return (
  
            <ListGroupItem className="border-0 cart__item">
                <div className="cart__item-info d-flex gap-2">
                    <img src={productImg} alt=""  />

                    <div className="cart__product-info d-flex w-100 gap-4 align-items-center gap-4 justify-content-between">
                       <div >
                        <h6 className="cart__product-title">برگر</h6>
                        <p className="d-flex align-items-center gap-5
                        cart__product-price">
                            <span>24 تومان</span>× 2 </p>
                        <div className="d-flex align-items-center 
                        justify-content-between gap-3
                        increase__decrease-btn
                        ">
                            <span className="increase__btn">
                                <i class="ri-add-fill"></i>
                            </span>
                            <span className="quantity">2</span>
                            <span className="decrease__btn">
                                <i class="ri-subtract-line"></i>
                            </span>
                            
                        </div>
                       </div >
                       <span className="delete__btn">
                            <i class="ri-close-line"></i>

                       </span>

                    </div>
                </div>
            </ListGroupItem>
      
    );
};

export default CartItem;