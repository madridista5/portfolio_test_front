import React from "react";
import Award from '../../images/award.jpg';

import './About.css';

export const About = () => (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"/>
            <div className="a-card">
                <img
                    src="https://cdn.pixabay.com/photo/2015/03/30/12/59/photographer-698743_960_720.jpg"
                    alt="photographer"
                    className="a-img"
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quaerat.
            </p>
            <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dolore minus
                natus nesciunt nobis non provident suscipit unde vel. Ab ad adipisci consectetur est in nam officia
                provident quis repellendus suscipit. Aperiam, atque dolor doloribus ducimus enim error eum ex fugiat
                itaque omnis quasi, quidem, quo soluta ullam veritatis.</p>
            <div className="a-award">
                <img src={Award} alt="award" className="a-award-img"/>
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Designer</h4>
                    <div className="a-award-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at beatae
                        corporis doloremque dolores doloribus maiores minima nisi quaerat quibusdam?
                    </div>
                </div>
            </div>
        </div>
    </div>
);