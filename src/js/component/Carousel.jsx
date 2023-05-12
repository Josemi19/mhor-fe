import React from 'react'
import Foto1 from "../../img/how-to.png"
import Foto2 from "../../img/rigo-baby.jpg"
import "../../styles/carousel.css"

export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Foto1} className="d-block w-100 foto" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Foto2} className="d-block w-100 foto" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </>
    )
}
