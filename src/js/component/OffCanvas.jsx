import React, { useContext } from 'react'
import "../../styles/offCanvas.css"
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const OffCanvas = () => {
    const { store } = useContext(Context)
    return (
        <>
            <button className="btn  d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <i className="bi bi-list fs-2"></i>
            </button>

            <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-semibold" id="offcanvasResponsiveLabel">MHOR STYLE</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <div className='mx-2 fs-3 py-3'>
                        <Link to={"/"} className='link offcanvasItem'>INICIO</Link>
                    </div>
                    <div className='mx-2 fs-3 py-3'>
                        <Link to={"/all/carteras"} className='link offcanvasItem'>CARTERAS</Link>
                    </div>
                    <div className='mx-2 fs-3 py-3'>
                        <Link to={"/all/prendas"} className='link offcanvasItem'>PRENDAS</Link>
                    </div>
                    <div className='mx-2 fs-3 py-3'>
                        <Link to={"/about-us"} className='link offcanvasItem'>NUESTRA MARCA</Link>
                    </div>
                    <div className="d-flex gap-3 align-items-end social-media-canvas">
                        <a href="https://instagram.com/mhorstyle?igshid=MTIyMzRjYmRlZg==" className="navbar-brand" target="_blank"><i className="bi bi-instagram" style={{ color: "#E4405F" }}></i></a>
                        <a href="mailto:mhorstyle@gmail.com" className="navbar-brand" target="_blank"><i className="bi bi-envelope-fill"></i></a>
                        <a href="https://api.whatsapp.com/send/?phone=584140264565&text&type=phone_number&app_absent=0" className="navbar-brand" target="_blank"><i className="bi bi-whatsapp" style={{ color: "#25D366" }}></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
