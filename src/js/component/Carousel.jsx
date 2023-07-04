import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css"

const pictures = ["https://res.cloudinary.com/drwck4b6d/image/upload/v1685985109/SILVIA-3_gou3e6.jpg", "https://res.cloudinary.com/drwck4b6d/image/upload/v1685985106/SILVIA-4_kxwgdf.jpg", "https://res.cloudinary.com/drwck4b6d/image/upload/v1685985106/ALANYS-4_ekwtlf.jpg"]
export class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1500,
            cssEase: "linear"
        };

        return (
            <div className="container">
                <Slider {...settings}>
                    {pictures.map((pic, index) => {
                        return (
                            <div className="w-100" key={index}>
                                <img src={pic} className="foto w-100" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}