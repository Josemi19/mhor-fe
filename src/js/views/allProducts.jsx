import React from 'react'
import { useParams } from 'react-router'
import { allCarteras, allPrendas } from '../../data'
import { Link } from 'react-router-dom'
import { ItemCar } from '../component/itemCar.jsx'
import "../../styles/cards.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export const AllProducts = () => {
    const { categoria } = useParams()
    return (
        <>
            {
                categoria == "carteras"
                    ?
                    <div className="container text-center">
                        <div className='fs-3 categoriaBottom mt-3'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
                        <div className="row">
                            {allCarteras.map((cartera, index) => {
                                return (
                                    <div className="col-6 col-md-3 my-3" key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                        <Link to={`/cartera/${cartera.modelo}`} className='link'>
                                            <div className="card">
                                                <img src={cartera.img} className="card-img-top" alt={`Modelo ${cartera.modelo}`} />
                                                <div className="card-body">
                                                    <h5 className="card-title item-nombre">{cartera.nombre}</h5>
                                                    <p className="card-text item-precio">{`$${cartera.precio} USD`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <ItemCar />
                    </div>
                    :
                    <div className="container text-center">
                        <div className='fs-3 categoriaBottom mt-3'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
                        <div className="row">
                            {allPrendas.map((prenda, index) => {
                                return (
                                    <div className="col-6 col-md-3 my-3" key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                        <Link to={`/prenda/${prenda.modelo}`} className='link'>
                                            <div className="card">
                                                <img src={prenda.img} className="card-img-top" alt={`Modelo ${prenda.modelo}`} />
                                                <div className="card-body">
                                                    <h5 className="card-title item-nombre">{prenda.nombre}</h5>
                                                    <p className="card-text item-precio">{`$${prenda.precio} USD`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <ItemCar />
                    </div>
            }
        </>
    )
}
