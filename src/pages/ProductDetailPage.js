import React from 'react';
import "~react-image-gallery/styles/css/image-gallery.css";
import {Container} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import images from './Components/carousel'

export default function ProductDetailPage() {

    return(
        <Container>
            <div className="row">
                <div className="col-4">
                    <ImageGallery items={images}/>
                </div>
                <div className="col-md-6 text-right">
                    <h3>Описание</h3>
                </div>
            </div>
        </Container>
    )
}