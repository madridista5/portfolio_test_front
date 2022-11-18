import React, {useRef, SyntheticEvent, useContext} from "react";
import emailjs from '@emailjs/browser';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import {ThemeContext} from "../../context/ThemeContext";

import './Contact.css';

export const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_rerzhqg', 'template_2jsor1r', formRef.current, '46vfu3V_dXSjCUxR7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
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
                    <p className="c-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam
                        amet
                        autem beatae corporis impedit molestiae, nobis placeat quis!</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Email" name="user_email"/>
                        <textarea
                            style={{backgroundColor: darkMode && '#333'}}
                            rows="5"
                            placeholder="Message"
                            name="message"
                        />
                        <button type="submit" value="Send">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};