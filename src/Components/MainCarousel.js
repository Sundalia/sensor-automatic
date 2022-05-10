import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import car1 from './carousel/carousel1.webp';
import car2 from './carousel/carousel2.webp';
import car3 from './carousel/carousel3.webp';
import '../App.css';

export default function MainCarousel() {
    return(
        <Carousel className="carousel" variant="dark">
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={car1}
                    alt="First slide"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={car2}
                    alt="Second slide"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={car3}
                    alt="Third slide"
                />
            </CarouselItem>
        </Carousel>
    )
}