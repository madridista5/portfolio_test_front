import React from "react";
import {Product} from "../Product/Product";
import {products} from "../../utils/data";

import './ProductList.css';

export const ProductList = () => (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire.</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quo.
            </p>
        </div>
        <div className="pl-list">
            {products.map(item => (
                <Product key={item.id} img={item.img}/>
            ))}
        </div>
    </div>
);