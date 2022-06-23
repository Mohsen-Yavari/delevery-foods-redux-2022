import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";

import Carts from '../Ui/cart/Carts';
import { useSelector } from 'react-redux';

const Layout = () => {

const showCart = useSelector(state=>state.cartUi.cartIsVisible)

    return (
        <div>
            <Navbar />
            {showCart &&  <Carts />}
           
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;