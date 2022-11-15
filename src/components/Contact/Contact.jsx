import React from "react";
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';

import './Contact.css';

export const Contact = () => (
    <div className="c">
        <div className="c-bg"/>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img
                            src={Phone}
                            alt="phone"
                            className="c-icon"
                        />
                        666 777 888
                    </div>
                    <div className="c-info-item">
                        <img
                            src={Email}
                            alt="email"
                            className="c-icon"
                        />
                        test@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img
                            src={Address}
                            alt="address"
                            className="c-icon"
                        />
                        ul. Zielona 34, Kraków
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam amet autem beatae corporis impedit molestiae, nobis placeat quis!</p>
                <form>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
);