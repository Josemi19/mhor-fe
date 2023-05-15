import React from 'react'
import "../../styles/offCanvas.css"
import { Link } from 'react-router-dom'

export const OffCanvas = () => {
    return (
        <>
            <button className="btn  d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <i className="bi bi-list fs-2"></i>
            </button>

            <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Mhor Style</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Link to={"/all/carteras"} style={{ "textDecoration": "none", "color": "black" }}>Carteras</Link>
                    <Link to={"/all/prendas"} style={{ "textDecoration": "none", "color": "black" }}>Prendas</Link>
                </div>
            </div>
        </>
    )
}
