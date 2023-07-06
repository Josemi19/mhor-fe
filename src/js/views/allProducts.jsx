import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCar } from '../component/itemCar.jsx'
import "../../styles/cards.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Context } from '../store/appContext'

AOS.init();

export const AllProducts = () => {
    const { categoria } = useParams()
    const { store } = useContext(Context)
    return (
        <>
            {
                categoria == "carteras"
                    ?
                    <div className="container text-center" style={{ "minHeight": "85vh" }}>
                        <div className='fs-3 categoriaBottom mt-3'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
                        <div className="row">
                            {store.carteras.length != 0 ?
                                store.carteras.map((cartera, index) => {
                                    return (
                                        <div className="col-6 col-md-3 my-3" key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                            <Link to={`/cartera/${cartera.id}`} className='link'>
                                                <div className="card">
                                                    <img src={cartera.attributes.img.data[0].attributes.url} className="card-img-top" alt={`Modelo ${cartera.attributes.modelo}`} />
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
                        <ItemCar />
                    </div>
                    :
                    <div className="container text-center" style={{ "minHeight": "85vh" }}>
                        <div className='fs-3 categoriaBottom mt-3'>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
                        <div className="row">
                            {store.prendas.length != 0 ?
                                store.prendas.map((prenda, index) => {
                                    return (
                                        <div className="col-6 col-md-3 my-3" key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                            <Link to={`/prenda/${prenda.id}`} className='link'>
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
                        <ItemCar />
                    </div>
            }
        </>
    )
}
