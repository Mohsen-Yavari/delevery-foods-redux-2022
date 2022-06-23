import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/res-logo.png";



// redux 
import { useSelector,useDispatch } from 'react-redux';
import {cartUiActions} from "../../store/shopping-cart/cartUiSlice";

const Navbar = () => {

  const totalQuantity = useSelector(state =>state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart =()=>{
    dispatch(cartUiActions.toggle())
  }
    return (
 <div >
  <nav className="navbar navbar-expand-lg gradiant__bg  bg-light" >
    <div className="container" >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i className="ri-menu-line" />

      </button>
      <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
  
        <ul className="navbar-nav  mb-2 mb-lg-0 ">
        
          
           <li className="nav-item">
            <Link to="/login" className="nav-link active" aria-current="page" >
           <i className="ri-user-line" />

            </Link>
          </li> 
           <li className="nav-item">
            <Link to="" className="nav-link active" aria-current="page" >
          
          <span className="icon__cart" onClick={toggleCart}>
          <i className="ri-shopping-cart-2-line position-relative">
            
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalQuantity}
            <span className="visually-hidden" />

            </span>
            </i>
          </span>
            
            </Link>
          </li> 

        </ul>
        <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >خانه</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/foods" className="nav-link active" aria-current="page" >غذاها</Link>
          </li> 
      
          <li className="nav-item">
            <Link to="/cart" className="nav-link active" aria-current="page" >کارت</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active" aria-current="page" >مخاطب</Link>
          </li>

         
   
         
        </ul> 

        
        

      </div>
      <Link to="/" className="navbar-brand" > 
        <img src={logo} alt="" className="logo" />
        <p className="logoName">غذای محسن</p>
      </Link>
    </div>
    
  </nav>

</div>

   
    );
};

export default Navbar;