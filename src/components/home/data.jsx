import React from "react";
import { Social } from "./social";
import CV from "../../assets/luigiLizaresCV.pdf"

export const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Luigi Giussep Lizares Gallegos</h1>
            <h3 className="home__subtitle">Senior Software Engineer</h3>
            <br />
            <div className="home__container-button">
                <a download="" href={CV} className="button button-download button--flex"> Download CV
                    <i className="uil uil-file-download"></i>
                </a>
                <a href="#contact" className="button button-home button--flex">
                    Contact me
                    <i className="uil uil-envelope-edit"></i>
                </a>
            </div>
            <Social />
        </div>
    )
}