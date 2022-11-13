import React from "react";

import './Product.css';

export const Product = ({img}) => (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"/>
            <div className="p-circle"/>
            <div className="p-circle"/>
        </div>
        <a href="#">
            <img className="p-img" src={img} alt="photo"/>
        </a>
    </div>
);