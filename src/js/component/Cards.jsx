import React from 'react'
import { Link } from 'react-router-dom'
import {topProducts} from "../../data"

export const Cards = () => {
    return (
        <>
            <div className="row">
                {topProducts.map((item, index) => {
                    return (
                        <div className="col-6 col-md-3 my-3" key={index}>
                            <Link to={`/product/${item.modelo}`} style={{ "textDecoration": "none", "color": "black" }}>
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt={`Modelo ${item.modelo}`} />
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold">{item.nombre}</h5>
                                        <p className="card-text fw-semibold">{`$${item.precio} USD`}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
