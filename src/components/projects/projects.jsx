import React from "react";
import "./projects.css";

export const Project = () => {
    return (
        <section className="project section container" id="project">
            <h2 className="section__title">Project</h2>

            <div className="project__info grid">

                <div className="project__box">
                    <h3 className="project-section__title">Nexos Green Bay</h3>
                    <span className="project__info">Mobile application and REST service developed using React Native
                        and NodeJS. Facilitated coupon discovery for users.</span>
                    <a href="https://play.google.com/store/apps/details?id=com.greenbay.nexos"
                        className="project__button">
                        See on google play
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>


                    <a href="https://apps.apple.com/cr/app/nexos-green-bay/id1468777318"
                        className="project__button">
                        See in the apple store
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                </div>

            </div>

        </section>
    )
}