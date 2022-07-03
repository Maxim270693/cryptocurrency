import React from 'react';
import App from "../../App";
import {Route, Routes} from "react-router-dom";
import Briefcase from "../Briefcase/Briefcase";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/briefcase' element={<Briefcase/>}/>
        </Routes>
    );
};

export default Router;