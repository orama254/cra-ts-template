import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './about';

import { HomePage } from './home';

import { RouteType }  from './types/routetype';

const pageRoutes: RouteType[] = [{
    path: '/',
    Component: HomePage,
},{
    path: '/about',
    Component: AboutPage,
}]


export const PageRoutes = () => (
    <BrowserRouter>
            <Routes>
                {pageRoutes.map((route, index) => (
                    <Route 
                    key={index} 
                    path={route.path} 
                    element={<route.Component />}
                    />
                    //     <pageRoutes.Component/>
                    // </Route>
                ))}
                {/* <Route path='/' element={<HomePage />} /> */}
            </Routes>
        </BrowserRouter>

)
