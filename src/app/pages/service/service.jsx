import React from "react";
import {Link} from "react-router-dom";
import './service.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import SquareBackgroundTech from "../../components/square-background-tech/square-background";
import DevSvgCard from "../../components/dev-svg-card/dev-svg-card";

const Intro = () => {
    return (
        <>
            <SectionContainer>
                <h2>What can i offer you</h2>
                <p>
                    <strong>A full-stack software engineer with over 8 years of experience.</strong>
                </p>
                <p>
                    <strong>I have maintained, developed and launched <Link to="/portfolio">multiple projects</Link> from scratch</strong>, carrying the development of its' back-end and
                    front-end codebases.
                </p>

                <p>
                    <em>Call me a Swiss Army Knife in terms of software.</em>
                </p>

                <hr/>
            </SectionContainer>
        </>
    )
}

const FrontEnd = () => {
    return (
        <>
            <SectionContainer>
                <h2>Front-End development</h2>
                <p>
                    <strong>I specialize in applications written in both React and Angular.</strong>
                </p>

                <p>My current experience and skills in front-end includes:</p>
                <ul>
                    <li>
                        Lead TypeScript/JavaScript development: bootstraping, refactoring, improving the structure,
                        reliability, build setup
                    </li>
                    <li>Good sense of design and UX</li>
                    <li>
                        Huge experience in almost all of the JS ecosystems, by having used in the
                        past many libraries like React, Redux, Redux-Observable, RxJS,
                        Angular, Ionic Framework, and many else.
                    </li>
                </ul>
            </SectionContainer>
        </>
    )
}

const BackEnd = () => {
    return (
        <>
            <SectionContainer>
                <h2>
                    Back-end Development
                </h2>

                <p>
                    <strong>In back-end development, my current stack involves</strong> <a
                    href="https://spring.io/projects/spring-boot" rel="nofollow">Java and Spring</a>
                </p>

                <p>What I can do for you at that side is:</p>

                <ul>
                    <li>Lead development of backends in Spring</li>
                    <li>Splitting the back-end into separate domains and microservices,</li>
                    <li>
                        Cooperation with APIs, remote data synchronizations, cloud servers,
                        asynchronous workers
                    </li>
                    <li>
                        Using different types of databases (
                        <a href="http://www.postgresql.org/" rel="nofollow">PostgreSQL</a>,
                        <a href="http://www.mysql.com/" rel="nofollow">MySQL</a>,
                        <a href="http://www.elasticsearch.org/" rel="nofollow">Elasticsearch</a>
                        )
                    </li>
                    <li>
                        Dividing the servers into different machine nodes / docker containers
                    </li>
                    <li>
                        Refactoring existing applications, by improving code readability,
                        separating concerns into separate functions/classes/modules, taking the
                        business logic out from your request/response layer into separate modules
                        (<a href="https://en.wikipedia.org/wiki/Domain-driven_design" rel="nofollow">DDD</a>),
                        and moving the app architecture into an event-based one
                    </li>
                    <li>writing unit and e2e tests</li>
                </ul>
            </SectionContainer>
        </>
    )
}
const DevOps = () => {
    return (
        <>
            <SectionContainer>
                <h2>
                    What about dev-ops, mobile, design, UI, project leadership, team mentorship ?
                </h2>

                <p>
                    I also had to care about other things needed in a successful application project:
                </p>

                <ul>
                    <li>Good planning of UI and thinking how it affects the UX</li>
                    <li>Search Engine Optimization</li>
                    <li>Launching, deployment and monitoring the app after the release</li>
                    <li>Recruiting, onboarding and mentoring team members</li>
                </ul>
            </SectionContainer>
        </>
    )
}

const SectionContainer = ({children}) => {
    return (
        <>
            <div className="container z-0 py-10 px-5 sm:px-10">
                <div className="prose max-w-full mx-0 text-gray-600 antialiased">
                    {children}
                </div>
            </div>
        </>
    )
}
const TechnoSwiper = ({children}) => {
    return (
        <>
            <div className={`w-full h-auto z-10 border-y techno-swiper relative`}>
                <div className="absolute inset-0 bg-beams bg-center"></div>
                <div
                    className="absolute inset-0 bg-grid bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <Swiper
                    className="custom-slider"
                    initialSlide={0}
                    navigation={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    slidesPerView={"auto"}
                    modules={[Navigation, Pagination]}>
                    {children}
                </Swiper>
            </div>
        </>
    )
}
const ServicePage = () => {
    let background = <SquareBackgroundTech
        mask="[mask-image:radial-gradient(circle_at_center,white_60%,transparent_100%)]"/>;

    return (
        <div className="flex flex-1 flex-col overflow-hidden relative">
            <div className="absolute custom-border self-center bg-white h-full w-full container">
            </div>
            <div className="flex flex-1 flex-col z-10 overflow-x-hidden overflow-y-auto items-center">

                <Intro></Intro>

                <FrontEnd></FrontEnd>

                <TechnoSwiper>
                    <SwiperSlide>
                        <DevSvgCard name="javascript" fileName="javascript-original"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="typescript" fileName="typescript-original"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="nodejs" fileName="nodejs-original-wordmark" backgroundColor={"white"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="npm" fileName="npm-original-wordmark" backgroundColor={"white"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="react" fileName="react-original-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="angularjs" tooltip="angular" fileName="angularjs-plain" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="redux" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="html5" fileName="html5-plain-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="css3" fileName="css3-plain-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="tailwindcss" fileName="tailwindcss-plain" fillWhite={true}/>
                    </SwiperSlide>
                </TechnoSwiper>


                <BackEnd></BackEnd>

                <TechnoSwiper>
                    <SwiperSlide>
                        <DevSvgCard name="java" fileName="java-original-wordmark" backgroundColor="white"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="javascript" fileName="javascript-original"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="spring" fileName="spring-plain-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="express" tooltip="express js" fileName="express-original-wordmark"
                                    backgroundColor="white"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="mongodb" fileName="mongodb-plain-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="mysql" fileName="mysql-plain-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="apachekafka" fileName="apachekafka-original-wordmark" fillWhite={true}/>
                    </SwiperSlide>
                </TechnoSwiper>


                <DevOps></DevOps>

                <TechnoSwiper>
                    <SwiperSlide>
                        <DevSvgCard name="docker" fileName="docker-original-wordmark" backgroundColor="white"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="kubernetes" fileName="kubernetes-plain-wordmark" backgroundColor="white"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="github" fileName="github-original-wordmark" backgroundColor="white"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="jenkins" fileName="jenkins-original" backgroundColor="white"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevSvgCard name="flutter" fileName="flutter-original" backgroundColor="white"/>
                    </SwiperSlide>
                </TechnoSwiper>
            </div>
        </div>
    )
};

export default ServicePage;