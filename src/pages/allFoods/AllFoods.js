import React,{useState,useEffect} from 'react';
import "./allFoods.scss";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/Ui/common-section/CommonSection";

import products from "../../assets/fake-data/products";
import ProductCard from "../../components/Ui/product-cart/ProductCart";

import ReactPaginate from "react-paginate";

const AllFoods = () => {
    
    const [searchItem,setSearchItem] = useState('');
    const [pagNumber,setPageNumber] = useState(0);

    const productPerPage = 6;
    const visitedPage = pagNumber + productPerPage;
    const displayPage =products.slice(visitedPage,visitedPage + 
        productPerPage);

        const pageCount =Math.ceil(products.length / productPerPage);

        const changePage = ({ selected }) => {
            setPageNumber(selected);
          };
    return (
        <Helmet title="AllFoods">
            <CommonSection title="غذاها" />


            <div className="container">
                <div className='row mt-5'>
                    <div className='col-sm-12 col-md-6 mb-5'>
                        <div className='sorting-wight '>
                            <select>
                                <option>پیشفرض</option>
                                <option value="ascending"> مرتب سازی الف -ی</option>
                                <option value="descending">مرتب سازی ی -الف</option>
                                <option value="high-price">بیشترین قیمت</option>
                                <option value="low-price">ارزان ترین</option>
                            </select>
                        </div>
                    </div>

           
                    <div className='col-sm-12 col-md-6 mb-5'>
                        <div className='search-widght d-flex align-items-center justify-content-between w-100'>
                            <input type="text" placeholder="جستجو" 
                            value={searchItem} 
                            onChange={e => setSearchItem(e.target.value)}
                            />
                            <span><i className="ri-search-line"></i></span>
                        </div>
                    </div>

                   
                    {
                        displayPage
                        ?.filter((item )=>{
                            if(searchItem.value === "") return item;
                            if(item.title
                                .toLowerCase()
                                .includes(searchItem.
                                toLowerCase())) return item
                        })
                        .map((item) =>(
                            <div className='col-sm-12 col-md-4 col-lg-3 mt-5'  key={item.id}>
                                <ProductCard item={item} />

                            </div>
                     
                        ))}

                        <div>
                            <ReactPaginate 
                             pageCount={pageCount}
                             onPageChange={changePage}
                             previousLabel={"قبلی"}
                             nextLabel={"بعدی"}
                             containerClassName=" paginationBttns "
                            />
                        </div>
                
                
               
                </div>
            </div>
        </Helmet>
    );
};

export default AllFoods;