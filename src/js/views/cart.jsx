import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const Cart = () => {
    const {store} = useContext(Context)
    const getTotal = () => {
        let total = 0
        for(let cartera of store.cart) {
            total = total + cartera.precio
        }
        return total;
    }
    return (
        <>
            <div className="container">
                {store.cart.map((item, index) => {
                    return(
                        <div key={index}>{item.nombre}</div>
                    )
                })}
            </div>
        </>
    )
}
