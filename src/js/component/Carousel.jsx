import React from 'react'
import Foto1 from "../../img/how-to.png"
import Foto2 from "../../img/rigo-baby.jpg"
import "../../styles/carousel.css"

export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2500">
                        <img src={Foto1} className="d-block w-100 foto" alt="Hola"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src={Foto2} className="d-block w-100 foto" alt="chao"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img src={Foto2} className="d-block w-100 foto" alt="siiii"/>
                    </div>
                </div>
            </div>
        </>
    )
}
