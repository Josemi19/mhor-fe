import React from 'react'
import {data} from "../../data"
import { useParams } from 'react-router'

export const SingleProduct = () => {
    const {modelo} = useParams()
    const cartera = data.find((item) => item.modelo == modelo)

    return (
        <>
            <div className="container">
                <div>
                    <img className='w-100' src={cartera.img} alt="..." />
                    <h3>{cartera.modelo}</h3>
                    <h5>{cartera.precio}</h5>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}
