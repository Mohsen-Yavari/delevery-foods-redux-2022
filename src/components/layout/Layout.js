import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
const Layout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;