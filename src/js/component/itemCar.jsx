import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import "../../styles/itemCar.css"

export const ItemCar = () => {
    const {store} = useContext(Context)
    return (
        <>
        <div className='item-car'>
            <Link to={'/cart'} className='link'>
                <span className="fs-4" style={{ "color": "white" }}>{store.cart.length}</span>
                <i className="fa-solid fa-bag-shopping mx-2 fs-4" style={{ "color": "white" }}></i>
            </Link>
        </div>
        </>
    )
}
