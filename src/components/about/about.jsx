import React from "react";
import "./about.css";
import { Info } from "./info";

export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <br />

            <div className="about__container container grid">
                <div className="about__data ">
                    <p className="about__description">
                        Experienced Backend Developer and Team Leader with 5+ years of expertise in Javascript, Typescript, REST
                        services and microservices. Proficient in AWS services like Lambda, Step Functions, and CloudWatch.
                        Committed to implementing best practices and continually improving skills. A self-motivated individual with a
                        passion for exploring new technologies and learning. Led a team of 3 backend developers, ensuring clean code
                        and adherence to best practices.
                    </p>

                </div>
                <p className="subtitle about__description" > MAIN TECH STACK </p>
                <Info />
            </div>

        </section>
    )
}