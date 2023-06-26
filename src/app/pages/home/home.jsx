import './home.scss';
import React from "react";
import {Fade} from "react-awesome-reveal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home_content">
                    <div className="avatar">
                        <div className="image avatar_img"></div>
                    </div>
                    <div className="details flex-col flex gap-4">

                        <h3 className="name">
                            <Fade cascade delay={0} damping={0.1}>
                                Chabane Nadjim
                            </Fade>
                        </h3>
                        <Fade direction="up" delay={300}>
                            <div className="job text-gray-700 font-montserrat font-medium antialiased">
                                <p className="m-0">
                                    Hi, welcome to my site 👋🏻 <br/>
                                    I'm a freelance software engineer <br/>
                                    specialized in both back-end and front-end development.
                                </p>
                            </div>
                        </Fade>
                        <Fade direction="up" cascade damping={0.4} delay={400}>
                            <ul className="social effect varrius">
                                <li>
                                    <a href="mailto:c.nadjim@gmail.com" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/CNadjim" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/nadjim-chabane-79788112b" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                </li>
                            </ul>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
