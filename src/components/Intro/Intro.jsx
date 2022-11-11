import React from "react";
import Man from '../../images/man.png';

import './Intro.css';

export const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">John Lock</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI / UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
                        consequatur eaque enim explicabo in maiores minima nihil nisi, non numquam quaerat saepe
                        temporibus tenetur velit voluptatem, voluptatum!
                    </p>
                </div>
            </div>
            <div className="i-right">
                <img src={Man} alt="man" className="i-img"/>
            </div>
        </div>
    );
}