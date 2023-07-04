import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import "../../styles/resumen.css"

export const Resumen = () => {
    const {store} = useContext(Context)

    return (
        <>
            <div className="row mt-3">
                {store.cart.map((item, index) => {
                    return(
                        <div className="row ms-0 mb-2 py-1 resumeItem col-12 col-md-6" key={index}>
                                <img src={item.attributes.img.data[0].attributes.url} alt={`Modelo: ${item.attributes.modelo}`} className='col-3'/>
                                <div className='col-9 d-flex pe-0 justify-content-between'>
                                    <span>{item.attributes.nombre}</span>
                                    <span className='me-1'>{`$${item.attributes.precio} USD`}</span>
                                </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
