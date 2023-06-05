import React, { useContext } from 'react'
import { topCarteras } from "../../data"
import { useParams } from 'react-router'
import { Context } from '../store/appContext'

export const SingleProduct = () => {
    const { store, actions } = useContext(Context)
    const { modelo } = useParams()
    const cartera = topCarteras.find((item) => item.modelo == modelo)
    const existe = store.cart.find((item) => item.modelo == modelo)

    return (
        <>
            <div className="container" style={{ "height": "85vh" }}>
                <div className='border border-dark bg-light'>
                    <img className='w-100' src={cartera.img} alt="..." />
                    <div className='d-flex justify-content-between p-3'>
                        <div>
                            <h3>{cartera.nombre}</h3>
                            <h6>{`Material: ${cartera.material}`}</h6>
                        </div>
                        <h6>{`$${cartera.precio} USD`}</h6>
                    </div>

                    <div className='d-flex justify-content-end me-2 mb-2'>
                        {existe == undefined
                            ?
                            <button className="btn btn-dark" onClick={() => actions.addToCart(cartera)}>Agregar al carrito</button>
                            :
                            <button className="btn btn-outline-danger" onClick={() => actions.addToCart(cartera)}>Eliminar del carrito</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
