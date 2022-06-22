import React from 'react';
import {LisstGropItem} from 'react-strap';
import productImg from "../../../assets/images/product_01.1.jpg";

const CartItem = () => {
    return (
        <div>
            <LisstGropItem>
                <div className="cart__item-info">
                    <img src={productImg} alt="" />

                    <div className="cart__product-info">
                       <div >
                        <h6>برگر</h6>
                        <p>2 × <span>24</span></p>
                        <div>
                            <span><i class="ri-add-fill"></i></span>
                            <span>2</span>
                            <span><i class="ri-subtract-line"></i></span>
                            
                        </div>
                       </div>
                       <i class="ri-close-line"></i>

                    </div>
                </div>
            </LisstGropItem>
        </div>
    );
};

export default CartItem;