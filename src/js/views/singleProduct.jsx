import React, { useContext } from 'react'
import { allCarteras, allPrendas } from "../../data"
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import "../../styles/singleProduct.css"
import { ItemCar } from '../component/itemCar.jsx'

export const SingleProduct = () => {
    const { store, actions } = useContext(Context)
    const { modelo, product } = useParams()
    const cartera = allCarteras.find((item) => item.modelo == modelo) // busca la cartera en data
    const prenda = allPrendas.find((item) => item.modelo == modelo) // busca la prenda en data
    const existe = store.cart.find((item) => item.modelo == modelo) // busca si el producto esta en el carrito

    return (
        <>
            {
                product == "cartera"
                    ?
                    <div className="container mt-3 container-single" style={{ "height": "85vh" }}>
                        <div className='border border-dark bg-light container-foto'>
                            <img className='w-100 foto-single' src={cartera.img} alt="..." />
                            <div className='d-flex flex-column justify-content-between'>
                                <div className='d-flex justify-content-between p-3 caption-single'>
                                    <div>
                                        <h3>{cartera.nombre}</h3>
                                        <h6>{`Material: ${cartera.material}`}</h6>
                                    </div>
                                    <h6>{`$${cartera.precio} USD`}</h6>
                                </div>

                                <div className='d-flex justify-content-end mb-2 p-3 button-single'>
                                    {existe == undefined
                                        ?
                                        <button className="btn btn-dark" onClick={() => actions.addToCart(cartera)}>Agregar al carrito</button>
                                        :
                                        <button className="btn btn-outline-danger" onClick={() => actions.addToCart(cartera)}>Eliminar del carrito</button>
                                    }
                                </div>
                            </div>
                        </div>
                        <ItemCar />
                    </div>
                    :
                    <div className="container mt-3 container-single" style={{ "height": "85vh" }}>
                        <div className='border border-dark bg-light container-foto'>
                            <img className='w-100 foto-single' src={prenda.img} alt="..." />
                            <div className='d-flex justify-content-between p-3 caption-single'>
                                <div>
                                    <h3>{prenda.nombre}</h3>
                                    <h6>{`Material: ${prenda.material}`}</h6>
                                </div>
                                <h6>{`$${prenda.precio} USD`}</h6>
                            </div>

                            <div className='d-flex justify-content-end mb-2 p-3 button-single'>
                                {existe == undefined
                                    ?
                                    <button className="btn btn-dark" onClick={() => actions.addToCart(prenda)}>Agregar al carrito</button>
                                    :
                                    <button className="btn btn-outline-danger" onClick={() => actions.addToCart(prenda)}>Eliminar del carrito</button>
                                }
                            </div>
                        </div>
                        <ItemCar />
                    </div>
            }

        </>
    )
}
