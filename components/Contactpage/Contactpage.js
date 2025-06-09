import React, { useState } from "react";

import SimpleReactValidator from "simple-react-validator";

const Contactpage = () => {
    const [forms, setForms] = useState({
        name: "",
        email: "",
        adress: "",
        service: "",
        note: "",
    });

    const [validator] = useState(new SimpleReactValidator());

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessages(); 
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
           
            setForms({
                name: "",
                email: "",
                adress: "",
                service: "",
                note: "",
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className="wpo-contact-pg-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>House No. S 2/346, A-1, Gate No.3 Patrakarpuram colony, Gilat Bazar, Varanasi-221002 (Uttar Pradesh)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>vertexinn07@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+91-8853554077</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <form onSubmit={submitHandler} className="contact-validation-active">
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={forms.name}
                                        onChange={changeHandler}
                                        placeholder="Your Name*"
                                    />
                                    {validator.message("name", forms.name, "required|alpha_space")}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={forms.email}
                                        onChange={changeHandler}
                                        placeholder="Your Email*"
                                    />
                                    {validator.message("email", forms.email, "required|email")}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="adress"
                                        value={forms.adress}
                                        onChange={changeHandler}
                                        placeholder="Address"
                                    />
                                    {validator.message("adress", forms.adress, "required")}
                                </div>
                                {/* <div>
                                    <select
                                        name="service"
                                        className="form-control"
                                        value={forms.service}
                                        onChange={changeHandler}
                                    >
                                        <option value="" disabled>Services</option>
                                        <option>Subject 1</option>
                                        <option>Subject 2</option>
                                        <option>Subject 3</option>
                                        <option>Subject 4</option>
                                    </select>
                                    {validator.message("service", forms.service, "required")}
                                </div> */}
                                <div className="fullwidth">
                                    <textarea
                                        className="form-control"
                                        name="note"
                                        value={forms.note}
                                        onChange={changeHandler}
                                        placeholder="Message..."
                                    />
                                    {validator.message("note", forms.note, "required|min:10")}
                                </div>
                                <div className="submit-area">
                                    <button type="submit" className="theme-btn">Get in Touch</button>
                                    <div id="loader">
                                        <i className="ti-reload"></i>
                                    </div>
                                </div>
                                <div className="clearfix error-handling-messages">
                                    <div id="success">Thank you</div>
                                    <div id="error">Error occurred while sending email. Please try again later.</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )

}

export default Contactpage;


