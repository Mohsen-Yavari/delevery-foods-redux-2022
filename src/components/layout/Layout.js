import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";

import Carts from '../Ui/cart/Carts';

const Layout = () => {
    return (
        <div>
            <Navbar />

            <Carts />
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;