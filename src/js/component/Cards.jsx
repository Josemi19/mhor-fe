import React from 'react'
import { Link } from 'react-router-dom'
import { topCarteras, topPrendas } from "../../data"
import "../../styles/cards.css"

export const Cards = ({ categoria }) => {
    return (
        <>
            {
                categoria == "carteras"
                    ?
                    <div className="row">
                        <Link to={`/all/${categoria}`} className='mt-4 categoria fs-1'>Carteras</Link>
                        {topCarteras.map((item, index) => {
                            return (
                                <div className="col-6 col-md-3 my-3" key={index}>
                                    <Link to={`/cartera/${item.modelo}`} className='link'>
                                        <div className="card">
                                            <img src={item.img} className="card-img-top" alt={`Modelo ${item.modelo}`} />
                                            <div className="card-body">
                                                <p className="card-title">{item.nombre}</p>
                                                <p className="card-text">{`$${item.precio} USD`}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        <Link to={`/all/${categoria}`} className='mb-4 categoriaBottom fs-3'>Ver Todo</Link>
                    </div>
                    :
                    <div className="row">
                        <Link to={`/all/${categoria}`} className='mt-4 categoria fs-1'>Prendas</Link>
                        {topPrendas?.map((item, index) => {
                            return (
                                <div className="col-6 col-md-3 my-3" key={index}>
                                    <Link to={`/prenda/${item.modelo}`} className='link'>
                                        <div className="card">
                                            <img src={item.img} className="card-img-top" alt={`Modelo ${item.modelo}`} />
                                            <div className="card-body">
                                                <h5 className="card-title item-nombre">{item.nombre}</h5>
                                                <p className="card-text item-precio">{`$${item.precio} USD`}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        <Link to={`/all/${categoria}`} className='mb-4 categoriaBottom fs-3'>Ver Todo</Link>
                    </div>
            }
        </>
    )
}
