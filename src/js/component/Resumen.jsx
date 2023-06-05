import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import "../../styles/resumen.css"

export const Resumen = () => {
    const {store} = useContext(Context)

    return (
        <>
            <div className="mt-3">
                {store.cart.map((item, index) => {
                    return(
                        <div className="row ms-0 mb-2 py-1 w-100 resumeItem" key={index}>
                                <img src={item.img} alt={`Modelo: ${item.modelo}`} className='col-3'/>
                                <div className='col-9 d-flex pe-0 justify-content-between'>
                                    <span>{item.nombre}</span>
                                    <span className='me-1'>{`$${item.precio} USD`}</span>
                                </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
