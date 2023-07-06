import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css"
import foto1 from "../../img/SILVIA-3.jpg"
import foto2 from "../../img/SILVIA-4.jpg"
import foto3 from "../../img/ALANYS-4.jpg"

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
                    <div className="w-100">
                        <img src={foto1} className="foto w-100" />
                        <div className="fondo-carrusel"></div>
                        <div className="texto-carrusel">
                            <h1 className="titulo-carrusel">Mhór Style</h1>
                            <p className="parrafo-carrusel">Piezas únicas y hechas a mano en Venezuela</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <img src={foto2} className="foto w-100" />
                        <div className="fondo-carrusel"></div>
                        <div className="texto-carrusel">
                            <h1 className="titulo-carrusel">Mhór Style</h1>
                            <p className="parrafo-carrusel">Piezas únicas y hechas a mano en Venezuela</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <img src={foto3} className="foto w-100" />
                        <div className="fondo-carrusel"></div>
                        <div className="texto-carrusel">
                            <h1 className="titulo-carrusel">Mhór Style</h1>
                            <p className="parrafo-carrusel">Piezas únicas y hechas a mano en Venezuela</p>
                        </div>
                    </div>
                </Slider>
            </>
        );
    }
}