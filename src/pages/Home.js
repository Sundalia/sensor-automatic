import React from "react";
import '../App.css';
import MainCarousel from "../Components/MainCarousel";
import About from "../Components/About";
import Carousel2 from "../Components/ScrollTable";


export const Home = () => (
    <>
        <MainCarousel/>
        <About/>
        <Carousel2/>
    </>
)