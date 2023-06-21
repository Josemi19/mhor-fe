import React from 'react'
import { useParams } from 'react-router'
import { allCarteras, allPrendas } from '../../data'
import { Link } from 'react-router-dom'

export const AllProducts = () => {
    const { categoria } = useParams()
    return (
        <>
            {
                categoria == "carteras"
                    ?
                    <div className="container text-center">
                        <div className='fs-3'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
                        <div className="row">
                            {allCarteras.map((cartera, index) => {
                                return (
                                    <div className="col-6 col-md-3 my-3" key={index}>
                                        <Link to={`/cartera/${cartera.modelo}`} className='link'>
                                            <div className="card">
                                                <img src={cartera.img} className="card-img-top" alt={`Modelo ${cartera.modelo}`} />
                                                <div className="card-body">
                                                    <h5 className="card-title fw-semibold">{cartera.nombre}</h5>
                                                    <p className="card-text fw-semibold">{`$${cartera.precio} USD`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div className="container text-center">
                        <div className='fs-3'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
                        <div className="row">
                            {allPrendas.map((prenda, index) => {
                                return (
                                    <div className="col-6 col-md-3 my-3" key={index}>
                                        <Link to={`/prenda/${prenda.modelo}`} className='link'>
                                            <div className="card">
                                                <img src={prenda.img} className="card-img-top" alt={`Modelo ${prenda.modelo}`} />
                                                <div className="card-body">
                                                    <h5 className="card-title fw-semibold">{prenda.nombre}</h5>
                                                    <p className="card-text fw-semibold">{`$${prenda.precio} USD`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }
        </>
    )
}
