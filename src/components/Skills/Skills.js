import React from "react";
import './Skills.css';

function Skills() {
    return (
        <section className="my-8">

            <div className="container ">
                <h1 className="title-text">My Skills</h1>
                <div className="skill-box">
                    <span className="title">HTML5</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">CSS3</span>
                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Bootstrap</span>
                    <div className="skill-bar">
                        <span className="skill-per bootstrap">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>
                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">NodeJS</span>
                    <div className="skill-bar">
                        <span className="skill-per nodejs">
                            <span className="tooltip">50%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ReactJS</span>
                    <div className="skill-bar">
                        <span className="skill-per reactjs">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ExpressJS</span>
                    <div className="skill-bar">
                        <span className="skill-per expressjs">
                            <span className="tooltip">50%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ExpressJS</span>
                    <div className="skill-bar">
                        <span className="skill-per mongodb">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;