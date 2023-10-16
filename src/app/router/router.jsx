import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/not-found/not-found";
import ServicePage from "../pages/service/service";
import HomePage from "../pages/home/home";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
};

export default Router;