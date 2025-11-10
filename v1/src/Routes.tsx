import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from "./components/common/MainLayout";
import EndPoints from "./constants/EndPoints.tsx";
import Home from "./pages/Home.tsx";

// Import page components
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout/>}>

                    <Route path={EndPoints.URL_HOME} element={<Home/>}/>

                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;