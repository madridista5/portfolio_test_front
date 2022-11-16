import React from "react";
import Sun from '../../images/sun.png';
import Moon from '../../images/moon.png';

import './Toggle.css';

export const Toggle = () => {
    return(
        <div className="t">
            <img src={Sun} alt="sun" className="t-icon"/>
            <img src={Moon} alt="moon" className="t-icon"/>
            <div className="t-button"></div>
        </div>
    );
}