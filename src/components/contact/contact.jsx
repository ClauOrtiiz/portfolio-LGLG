import React from "react";
import "./contact.css";


export const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact us</h2>
            <br />

            <div className="contact__container container grid">
                <div className="contact__content">

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">giussep.lizares@gmail.com</span>

                            <a href="Email:giussep.lizares@gmail.com" className="contact__button"> Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className='bx bxl-linkedin-square contact__card-icon'></i>
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">luigilizares</span>

                            <a href="https://www.linkedin.com/in/luigilizares/" className="contact__button"> Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}