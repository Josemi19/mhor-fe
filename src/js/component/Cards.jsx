import React from 'react'
import { Link } from 'react-router-dom'
import {data} from "../../data"

export const Cards = () => {
    const list = [1, 2, 3, 4]
    return (
        <>
            <div className="row">
                {data.map((item, index) => {
                    return (
                        <div className="col-6" key={index}>
                            <Link to={`/product/${item.modelo}`} style={{ "textDecoration": "none", "color": "black" }}>
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt={`Modelo ${item.modelo}`} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <p className="card-text">{item.precio}</p>
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
