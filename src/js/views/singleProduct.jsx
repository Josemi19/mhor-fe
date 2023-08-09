import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import "../../styles/singleProduct.css"

export const SingleProduct = () => {
    const { store, actions } = useContext(Context)

    const { id, product } = useParams()
    const cartera = store.carteras.find((item) => item?.id == id) // busca la cartera
    const prenda = store.prendas.find((item) => item?.id == id) // busca la prenda

    return (
        <>
            {
                product == "cartera"
                    ?
                    <div className="container mt-3 container-single" style={{ "minHeight": "85vh" }}>
                        <div className='card container-foto'>
                            <img className='w-100 foto-single' src={cartera?.attributes.img.data[0].attributes.url} alt="..." />
                            <div className='d-flex flex-column justify-content-between'>
                                <div className='d-flex justify-content-between p-3 caption-single'>
                                    <div>
                                        <p className='card-title'>{cartera?.attributes.nombre}</p>
                                        <p className='card-text'>{`Descripción: ${cartera?.attributes.descripcion}`}</p>
                                    </div>
                                    <p className='card-text'>{`$${cartera?.attributes.precio} USD`}</p>
                                </div>

                                <div className='d-flex justify-content-end mb-2 p-3 button-single'>
                                    {actions.existeProducto(cartera) == undefined
                                        ?
                                        <button className="btn btn-dark" onClick={() => actions.addToCart(cartera)}>Agregar al carrito</button>
                                        :
                                        <button className="btn btn-outline-danger" onClick={() => actions.addToCart(cartera)}>Eliminar del carrito</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container mt-3 container-single" style={{ "minHeight": "85vh" }}>
                        <div className='border border-dark bg-light container-foto'>
                            <img className='w-100 foto-single' src={prenda?.attributes.img.data[0].attributes.url} alt="..." />
                            <div className='d-flex justify-content-between p-3 caption-single'>
                                <div>
                                    <h3>{prenda?.attributes.nombre}</h3>
                                    <h6>{`Material: ${prenda?.attributes.descripcion}`}</h6>
                                </div>
                                <h6>{`$${prenda?.attributes.precio} USD`}</h6>
                            </div>

                            <div className='d-flex justify-content-end mb-2 p-3 button-single'>
                                {actions.existeProducto(prenda) == undefined
                                    ?
                                    <button className="btn btn-dark" onClick={() => actions.addToCart(prenda)}>Agregar al carrito</button>
                                    :
                                    <button className="btn btn-outline-danger" onClick={() => actions.addToCart(prenda)}>Eliminar del carrito</button>
                                }
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}
