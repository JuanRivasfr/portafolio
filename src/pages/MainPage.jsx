import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/MainPage.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MainPage() {

    const Skill = ({ value, text }) => {
        return (
            <div className="circular-progressbar-container">
                <CircularProgressbar
                    value={value}
                    text={text}
                    styles={{
                        path: {
                            stroke: '#007BFF',
                        },
                        text: {
                            fill: '#242424',
                            fontSize: '13px',
                            fontWeight: 'bolder',
                        },
                        trail: {
                            stroke: '#003366',
                        },
                    }}
                />
            </div>
        );
    };

    const SoftSkill = ({ value, text }) => {
        return (
            <div className="circular-progressbar-container">
                <CircularProgressbar
                    value={value}
                    text={text}
                    styles={{
                        path: {
                            stroke: '#007BFF',
                        },
                        text: {
                            fill: '#242424',
                            fontSize: '13px',
                            fontWeight: 'bolder',
                            whiteSpace: 'pre-line', 
                            textAlign: 'center',
                        },
                        trail: {
                            stroke: '#003366',
                        },
                    }}
                />
            </div>
        );
    };

    return (
        <>
            <header id="header-nav">
                <nav>
                    <ul>
                        <li><a href="#section-aboutme">ABOUT</a></li>
                        <li><a href="#section-skills">SKILLS</a></li>
                        <li><a href="#section-softskills">SOFT SKILLS</a></li>
                    </ul>
                </nav>
            </header>
            <section id="section-aboutme">
                <h1>ABOUT ME</h1>
                <div id="div-description">
                    <p>
                        I am a 20-year-old developer with solid knowledge in HTML, CSS, JavaScript, Node.js, Express, and React.
                        My fascination with programming and eagerness to start my professional career drive me to deliver innovative and efficient solutions.
                        I am committed to excellence and ready to add value to challenging projects in the field of web development.
                    </p>
                </div>
            </section>
            <section id="section-skills">
                <h1>SKILLS</h1>
                <div id="div-skills">
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/nodeLogo.png" alt="Node.js" id="imgNode" />
                            </div>
                            <div className="skill-back">
                                <Skill value={50} text="Node.js" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/expressLogo.png" alt="Express.js" id="imgExpress" />
                            </div>
                            <div className="skill-back">
                                <Skill value={50} text="Express.js" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/javaScriptLogo.png" alt="JavaScript" id="imgJavaScript" />
                            </div>
                            <div className="skill-back">
                                <Skill value={55} text="JavaScript" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/mongoDBLogo.png" alt="MongoDB" id="imgMongoDB" />
                            </div>
                            <div className="skill-back">
                                <Skill value={45} text="MongoDB" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/htmlLogo.png" alt="HTML" id="imgHtml" />
                            </div>
                            <div className="skill-back">
                                <Skill value={60} text="HTML" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/cssLogo.png" alt="CSS" id="imgCss" />
                            </div>
                            <div className="skill-back">
                                <Skill value={60} text="CSS" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/reactLogo.png" alt="React" id="imgReact" />
                            </div>
                            <div className="skill-back">
                                <Skill value={40} text="React" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-softskills">
                <h1>SOFT SKILLS</h1>
                <div id="div-skills">
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/creativityy.png" alt="Creativity" id="imgCreativity" />
                            </div>
                            <div className="skill-back">
                                <SoftSkill value={50} text="CREATIVE" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/adapt.png" alt="teamwork" id="imgAdapt" />
                            </div>
                            <div className="skill-back">
                                <SoftSkill value={50} text="ADAPT" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/teamwork.png" alt="teamwork" id="imgTeamWork" />
                            </div>
                            <div className="skill-back">
                                <SoftSkill value={55} text="TEAMWORK" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/solving.png" alt="Solving" id="imgSolving" />
                            </div>
                            <div className="skill-back">
                                <SoftSkill value={45} text="SOLVING" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/comm.png" alt="Comm" id="imgComm" />
                            </div>
                            <div className="skill-back">
                                <SoftSkill value={60} text="COMMS" />
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <img src="/decision.png" alt="Decision" id="imgDecision" />
                            </div>
                            <div className="skill-back">
                                <SoftSkill value={60} text="DECISION" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;