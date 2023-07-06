import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/cards.css"
import 'aos/dist/aos.css';
import { Context } from '../store/appContext';
import "../../styles/loader.css"


export const Cards = ({ categoria }) => {
    const { store } = useContext(Context)
    return (
        <>
            {
                categoria == "carteras"
                    ?
                    <div className="row">
                        <Link to={`/all/${categoria}`} className='mt-4 categoria fs-1'>Carteras</Link>
                        {store.carteras.length != 0 ?
                            store.carteras.map((item, index) => {
                                return (
                                    <div className={`col-6 col-md-3 my-3 ${index > 3 && "d-none"}`} key={index} data-aos="fade-right">
                                        <Link to={`/cartera/${item.id}`} className='link'>
                                            <div className="card">
                                                <img src={item.attributes.img.data[0].attributes.url} className="card-img-top" alt={`Modelo ${item.attributes.modelo}`} />
                                                <div className="card-body">
                                                    <p className="card-title">{item.attributes.nombre}</p>
                                                    <p className="card-text">{`$${item.attributes.precio} USD`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                            :
                            <div className="d-flex justify-content-center">
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            </div>
                        }
                        <Link to={`/all/${categoria}`} className='mb-4 categoriaBottom fs-3'>Ver Todo</Link>
                    </div>
                    :
                    <div className="row">
                        <Link to={`/all/${categoria}`} className='mt-4 categoria fs-1'>Prendas</Link>
                        {store.prendas.length != 0 ?
                            store.prendas.map((item, index) => {
                                return (
                                    <div className="col-6 col-md-3 my-3" key={index} data-aos="fade-right">
                                        <Link to={`/prenda/${item.id}`} className='link'>
                                            <div className="card">
                                                <img src={item.attributes.img.data[0].attributes.url} className="card-img-top" alt={`Modelo ${item.attributes.modelo}`} />
                                                <div className="card-body">
                                                    <h5 className="card-title item-nombre">{item.attributes.nombre}</h5>
                                                    <p className="card-text item-precio">{`$${item.attributes.precio} USD`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                            :
                            <div className="d-flex justify-content-center">
                                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                            </div>
                        }
                        <Link to={`/all/${categoria}`} className='mb-4 categoriaBottom fs-3'>Ver Todo</Link>
                    </div>
            }
        </>
    )
}
