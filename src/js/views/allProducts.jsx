import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCar } from '../component/itemCar.jsx'
import "../../styles/cards.css"
import 'aos/dist/aos.css';
import { Context } from '../store/appContext'
import { Helmet } from 'react-helmet'


export const AllProducts = () => {
    const { categoria } = useParams()
    const { store } = useContext(Context)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {
                categoria == "bolsos"
                    ?
                    <div className="container text-center">
                        <Helmet>
                            <title>Mhór Style | Bolsos</title>
                        </Helmet>
                        <div className='fs-1 categoriaBottom mt-3'>{"Bolsos"}</div>
                        <div className="row">
                            {store.carteras.length != 0 ?
                                store.carteras.sort((a, b) => a.attributes.nombre.localeCompare(b.attributes.nombre)).map((cartera, index) => {
                                    return (
                                        <div className="col-6 col-md-3 my-3" key={index} data-aos="fade-right">
                                            <Link to={`/bolso/${cartera.id}`} className='link'>
                                                <div className="card">
                                                    <img src={cartera.attributes.img.data[0].attributes.url} className="card-img-top" alt={`Modelo ${cartera.attributes.nombre}`} />
                                                    <div className="card-body">
                                                        <h5 className="card-title item-nombre">{cartera.attributes.nombre}</h5>
                                                        <p className="card-text item-precio">{`$${cartera.attributes.precio} USD`}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    <h1>Aún no hay productos disponibles</h1>
                                    <h2>Haga click <Link to={"/"} style={{ "color": "black" }}>AQUÍ</Link> para volver al inicio</h2>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <div className="container text-center">
                        <Helmet>
                            <title>Mhór Style | Ropa</title>
                        </Helmet>
                        <div className='fs-3 categoriaBottom mt-3'>{"Ropa"}</div>
                        <div className="row">
                            {store.prendas.length != 0 ?
                                store.prendas.map((prenda, index) => {
                                    return (
                                        <div className="col-6 col-md-3 my-3" key={index} data-aos="fade-right">
                                            <Link to={`/ropa/${prenda.id}`} className='link'>
                                                <div className="card">
                                                    <img src={prenda.attributes.img.data[0].attributes.url} className="card-img-top" alt={`Modelo ${prenda.attributes.modelo}`} />
                                                    <div className="card-body">
                                                        <h5 className="card-title item-nombre">{prenda.attributes.nombre}</h5>
                                                        <p className="card-text item-precio">{`$${prenda.attributes.precio} USD`}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    <h1>Aún no hay productos disponibles</h1>
                                    <h2>Haga click <Link to={"/"} style={{ "color": "black" }}>AQUÍ</Link> para volver al inicio</h2>
                                </div>
                            }
                        </div>
                    </div>
            }
            <ItemCar />
        </>
    )
}
