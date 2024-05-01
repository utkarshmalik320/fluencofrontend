import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from "../src/Pages/auth/signin/Signin.jsx";
import Signup from "../src/Pages/auth/signup/Signup.jsx";
import Layout from "./Layout.jsx";
import Home from "../src/Pages/influencer/Influencer.jsx";
import LandingPage from "../src/Pages/coupon/Coupon.jsx";
// import Setup from "./Pages/Setup.jsx";
import HomePage from "../src/Pages/home/HomePage.jsx";
import Addcoupon from "./Pages/coupon/Addcoupon.jsx";
import CreatorInfo from "./Pages/coupon/Profileinfo.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/influencer' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/signup/setup' element={<Setup/>} /> */}
        <Route path='/allcoupon' element={<LandingPage />} />
        <Route path='/createcoupon' element={< Addcoupon/>} />
        <Route path='/profile' element={<CreatorInfo/>} />
      </Route>
    )
  )
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
