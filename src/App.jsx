import React from "react";
import {Intro} from "./components/Intro/Intro";
import {About} from "./components/About/About";
import {ProductList} from "./components/ProductList/ProductList";
import {Contact} from "./components/Contact/Contact";

import './App.css';

export const App = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    );
}