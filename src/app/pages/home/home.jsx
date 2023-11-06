import './home.scss';
import React from "react";
import waving from '../../../assets/image/waving.png';
import SquareBackgroundTech from "../../components/square-background-tech/square-background";
import {Fade, Slide, Zoom} from "react-awesome-reveal";

export const Presentation = () => {
    return (
        <>
            <div className="flex flex-none flex-col gap-3 presentation xl:flex-auto">
                <Slide triggerOnce={true}>
                    <h1 className="flex flex-none flex-row gap-4 justify-center items-center text-3xl font-bold tracking-tight text-hero-color sm:text-5xl md:text-6xl xl:justify-start">
                        <span>Full-Stack Developer</span>
                        <Zoom delay={600}>
                            <img className="waving hidden sm:block" src={waving} alt="coucou"/>
                        </Zoom>
                    </h1>
                </Slide>
                <Fade direction="up" delay={600} triggerOnce={true}>
                    <p className="text-xl leading-8 text-text-color antialiased text-center xl:text-start">
                        Hi, I'm Chabane Nadjim. <br/>
                        A software engineer specialized in back-end and front-end development. <br/>
                        Based in Paris, France. 📍
                    </p>

                </Fade>
                <Fade direction="up" delay={1000} triggerOnce={true}>
                    <div className="py-4 flex-none flex flex-row justify-center gap-4 social xl:justify-start">
                        <a aria-label="linkedin" rel="noreferrer" target="_blank"
                           href="https://www.linkedin.com/in/nadjim-chabane-79788112b">

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="tabler-icon tabler-icon-brand-linkedin">
                                <path
                                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                <path d="M8 11l0 5"></path>
                                <path d="M8 8l0 .01"></path>
                                <path d="M12 16l0 -5"></path>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                        </a>
                        <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/cnadjim">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="tabler-icon tabler-icon-brand-github">
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>
                    </div>
                </Fade>

            </div>
        </>
    )
}
export default function HomePage() {
    return (
        <>
            <div className="flex flex-1 flex-col overflow-auto relative">
                <SquareBackgroundTech/>
                <div
                    className="z-10 flex flex-1 pt-3 items-center justify-end self-center flex-col-reverse gap-12 container md:pt-0 md:self-center md:items-center md:justify-center xl:flex-row xl:flex-1">
                    <Presentation></Presentation>

                    <Zoom triggerOnce={true}>
                        <div className="flex-none avatar">
                            <div className="image"></div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    );
};
