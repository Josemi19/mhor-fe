import React, { useContext } from 'react'
import {data} from "../../data"
import { useParams } from 'react-router'
import { Context } from '../store/appContext'

export const SingleProduct = () => {
    const {store, actions} = useContext(Context)
    const {modelo} = useParams()
    const cartera = data.find((item) => item.modelo == modelo)
    const existe = store.cart.find((item) => item.modelo == modelo)

    return (
        <>
            <div className="container">
                <div>
                    <img className='w-100' src={cartera.img} alt="..." />
                    <h3>{cartera.nombre}</h3>
                    <h5>{`$${cartera.precio} USD`}</h5>
                    {existe == undefined 
                    ?
                        <button className="btn btn-outline-dark" onClick={() => actions.addToCart(cartera)}>Agregar al carrito</button>
                    :
                    <button className="btn btn-outline-danger" onClick={() => actions.addToCart(cartera)}>Eliminar carrito</button>
                    }
                </div>
            </div>
        </>
    )
}