import React from 'react';

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

const categoryData = [
    {
        display:"فست فود",
        imgUrl:categoryImg01
    },
    {
        display:" پیتزا",
        imgUrl:categoryImg02
    },
    {
        display:" غذای محلی",
        imgUrl:categoryImg03
    },
    {
        display:" غذای گوشتی",
        imgUrl:categoryImg04
    }
]

const Category = () => {
    return (
        <div className='container'>
            <div className="row">
                {
                    categoryData.map((item,index)=>(
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="category-item" key={index}>
                                <img src={item.imgUrl} alt="" />
                                <p>{item.display}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Category;