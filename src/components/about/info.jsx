import React from "react";

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxl-nodejs about__icon'></i>
                <h3 className="about__title"> NodeJS</h3>
                <span className="about__subtitle"> 6 years </span>
            </div>

            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title"> Express</h3>
                <span className="about__subtitle"> 4 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bxl-react about__icon'></i>
                <h3 className="about__title"> Reactjs</h3>
                <span className="about__subtitle">3 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bxl-typescript about__icon'></i>
                <h3 className="about__title"> Typescript</h3>
                <span className="about__subtitle"> 4 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bxl-postgresql  about__icon'></i>
                <h3 className="about__title"> Postgres</h3>
                <span className="about__subtitle"> 4 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title"> SQS </h3>
                <span className="about__subtitle"> 3 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title"> SNS  </h3>
                <span className="about__subtitle"> 3 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title"> Serverless </h3>
                <span className="about__subtitle"> 3 years  </span>
            </div>

            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title"> Microservices </h3>
                <span className="about__subtitle"> 2 years  </span>
            </div>
        </div>
    )
}