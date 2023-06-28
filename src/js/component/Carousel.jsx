import React from 'react'
import "../../styles/carousel.css"

export const Carousel = () => {
    const pictures = ["https://res.cloudinary.com/drwck4b6d/image/upload/v1685985109/SILVIA-3_gou3e6.jpg", "https://res.cloudinary.com/drwck4b6d/image/upload/v1685985106/SILVIA-4_kxwgdf.jpg", "https://res.cloudinary.com/drwck4b6d/image/upload/v1685985106/ALANYS-4_ekwtlf.jpg"]

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {pictures.map((pic, index) => {
                        return (
                            <div className="carousel-item active d-flex justify-content-center" data-bs-interval="2500" key={index}>
                                <img src={pic} className="d-block w-100 foto"/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
