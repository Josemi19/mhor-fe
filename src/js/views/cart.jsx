import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import "../../styles/cart.css"
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="container text-center">
                <h2>Carrito de compras</h2>
                {store.cart == ''
                    ?
                    <div>Su Carrito esta vacio</div>
                    :
                    <div>
                        <h6>Resumen de compra</h6>
                        <div className='listaDeCompra row'>
                            {store.cart.map((item, index) => {
                                return (
                                    <div key={`${item.modelo}${index}`} className='container col-12 col-md-4'>
                                        <div className='row p-3 my-3'>
                                            <img src={item.img} alt={`Modelo ${item.modelo}`} className='col-4' />
                                            <div className='col-4'>
                                                <p className='fw-semibold'>
                                                    {item.nombre}
                                                </p>
                                            </div>
                                            <div className="col-4">
                                                <div className='fw-semibold'>{`$${item.precio} USD`}</div>
                                                <div className="mt-5" onClick={() => actions.addToCart(item)}>Eliminar</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className="w-100 d-flex align-items-end mt-2 p-3 flex-column">
                            <div className='fw-bold'>Total:</div>
                            <div className='fw-semibold'>{`$${actions.getTotal()} USD`}</div>
                            <span>El total no refleja los costos de envio,</span>
                            <span>los mismos dependeran de la zona/ciudad </span>
                            <span>a la que se haga el pedido.</span>
                            <Link to={"/pedido"} className="btn btn-dark mt-2">Realizar Pedido</Link>
                        </div>
                    </div>

                }
            </div>
        </>
    )
}
