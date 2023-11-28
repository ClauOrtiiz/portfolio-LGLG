import React from "react";
import "./footer.css";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h3 className="footer__title">Luigi Lizares Gallegos</h3>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#experience" className="footer__link">Experience</a>
                    </li>
                </ul>

            </div>
        </footer>
    )
}