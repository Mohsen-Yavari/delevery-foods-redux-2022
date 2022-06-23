import React from 'react';
import "./carts.scss";
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

import {useDispatch} from "react-redux";
import {cartUiActions} from "../../../store/shopping-cart/cartUiSlice";

const Carts = () => {

    const dispatch = useDispatch();

    const toggleCart = ()=>{
        dispatch(cartUiActions.toggle());
    }
    return (
        <div className="cart__container">

            <ListGroup className="cart">

                <div className="cart__close">
                    <span onClick={toggleCart}>
                        <i class="ri-close-line"></i>
                    </span>
                </div>

                <div className="cart__item-list">
                    <CartItem />
                    
                 
                </div>

                <div className="cart__bottom d-flex align-items-center justify-content-between ">
                    <h6>مجموع قیمت :<span> 123</span></h6>
                    <button><Link to="/checkout">چک کردن</Link></button>
                </div>
            </ListGroup>
        </div>
    );
};

export default Carts;