import React from 'react';
import {Route, Routes} from "react-router-dom";
import Briefcase from "../Briefcase/Briefcase";
import App from "../App/App";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/briefcase' element={<Briefcase/>}/>
        </Routes>
    );
};

export default Router;