import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css"
import carrusel1 from "../../img/carrusel/carrusel1.jpg"
import carrusel2 from "../../img/carrusel/carrusel2.jpg"
import carrusel4 from "../../img/carrusel/carrusel4.jpg"

const fotos = [carrusel1, carrusel2, carrusel4]
export class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1500,
            cssEase: "linear",
        };

        return (
            <>
                <Slider {...settings}>
                    {fotos.map((foto, index) => {
                        return (
                            <div key={index}>
                                <img src={foto} className="foto w-100" />
                                <div className="fondo-carrusel"></div>
                                <div className="texto-carrusel">
                                    <h1 className="titulo-carrusel">Mhór Style</h1>
                                    <p className="parrafo-carrusel">Piezas únicas y hechas a mano en Venezuela</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </>
        );
    }
}