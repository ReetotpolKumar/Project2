import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './Component/Pages/Home';

import AboutUs from './Component/Pages/AboutUs';
import Classess from './Component/Pages/Classess';
import Blogs from './Component/Pages/Blogs';
import Log from './Component/JoinUs/Log';
import Registration from './Component/JoinUs/Registration';
import Pricing from './Component/Pages/Pricing';
import Footer from './Component/Section/Footer';




import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
   },
   {
     path: "/Home",
     element: <Home/>,
   },
   {
     path: "/AboutUs",
     element: <AboutUs/>,
   },
   {
     path: "/Blogs",
     element: <Blogs/>,
   },
   {
     path: "/Classess",
     element: <Classess/>,
   },
   {
     path: "/LogIn",
     element: <Log/>,
   },
   {
     path: "/Registration",
     element: <Registration/>,
   },
   {
     path: "/Pricing",
     element: <Pricing/>,
   },
   {
     path: "/Footer",
     element: <Footer/>,
   },
 ]);

root.render(
  
    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
