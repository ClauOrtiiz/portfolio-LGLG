import React from "react";


export const Allexperience = () => {
    return (


        <div className="allexperience__container ">

            <div className=" allexperience__info">

                <div className="allexperience__box ">
                    {/* <i className="bx bx-badge-check" ></i> */}
                    <h3 className="project-section__title">Moonshot partners, Senior Software Engineer</h3>
                    <span className="section__subtitle">October 2021 - Present</span>
                    <ul className="allexperience-list">
                        <li className="experience-list text">
                            Led a 3-member backend team, fostering collaboration and adherence to best practices.
                        </li>
                        <li className="experience-list text">
                            Developed a robust scraper and data pipeline, streamlining data extraction, analysis, and filtering.
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: Typescript, Python, Pandas, N8N, AWS lambdas.
                                </li>
                            </ul>
                        </li>
                        <li className="experience-list text">
                            Designed a scalable microservices-oriented architecture for our multiplatform application
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: Microservices, RESTful APIs, AWS, Express (Nodejs), Next.js, Typescript.
                                </li>
                            </ul>
                        </li>
                        <li className="experience-list text">
                            Personally coded, optimized, and maintained critical microservices to enhance system performance.
                        </li>
                        <li className="experience-list text">
                            Created comprehensive technical documentation for the microservices to ensure knowledge sharing.
                        </li>
                        <li className="experience-list text">
                            Acted as a mentor to junior team members, supporting their professional growth and development.
                        </li>
                    </ul>
                </div>

                <div className="allexperience__box ">
                    {/* <i className="bx bx-badge-check" ></i> */}
                    <h3 className="project-section__title">Zoluxiones, Backend Developer</h3>
                    <span className="section__subtitle">February 2021 - October 2021</span>
                    <ul className="experience-list">
                        <li className="experience-list text">
                            Successfully achieved a 20% reduction in response time through the implementation of parallel service
                            queries, enhancing system efficiency.
                        </li>

                        <li className="experience-list text">
                            Implemented code quality practices, resulting in an impressive 95% reduction in bugs, code smells, and
                            duplicates, ensuring robust and clean code repositories.
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: SonarQube.
                                </li>
                            </ul>
                        </li>

                        <li className="experience-list text">
                            Introduced "waitForTaskToken" method in AWS Step Functions, significantly enhancing coordination with
                            on-premises services for seamless workflow management.
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: AWS Step Functions, AWS Lambda
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="allexperience__box ">
                    {/* <i className="bx bx-badge-check" ></i> */}
                    <h3 className="project-section__title">Tecsup, Software Developer </h3>
                    <span className="section__subtitle">January 2018 - January 2021</span>
                    <ul className="experience-list">
                        <li className="experience-list text">
                            Significantly reduced user load time by an impressive 87% through the implementation of a bulk user
                            load script, ensuring a smoother user experience.
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: Javascript
                                </li>
                            </ul>
                        </li>
                        <li className="experience-list text">
                            Designed, developed, and maintained web applications dedicated to mine operator training and COVID
                            security protocols monitoring, contributing to safer operations.
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: Express, React.js, Redux, Node.js
                                </li>
                            </ul>
                        </li>
                        <li className="experience-list text">
                            Successfully executed a seamless migration from legacy web technologies to modern platforms,
                            preserving system robustness and enhancing scalability.
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: Netcore. React.js

                                </li>
                            </ul>
                        </li>
                        <li className="experience-list text">
                            Applied agile methodologies to optimize service delivery and project control, streamlining development
                            processes.
                        </li>
                        <li className="experience-list text">
                            Developed a pioneering application for mine operator training, utilizing 3D objects and Hololens
                            augmented reality glasses to revolutionize training processes
                            <ul className="allexperience-sub-list">
                                <li>
                                    Tech Stack: Unity 3D, Microsoft Hololens
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>


            </div>
        </div >


    )
}