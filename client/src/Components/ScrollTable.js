import React from "react";
import Slider from "react-slick";
import '../App.css';
import {CardGroup, Container} from "react-bootstrap";


export default function ScrollTable() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return(
            <Container>
                <Slider {...settings}>
                    <CardGroup>

                    </CardGroup>
                </Slider>
            </Container>
        )
}