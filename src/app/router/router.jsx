import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import NotFound from "../pages/not-found/not-found";
import Portfolio from "../pages/portfolio/portfolio";
import Contact from "../pages/contact/contact";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
};

export default Router;
