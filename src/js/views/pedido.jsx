import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Accordion } from '../component/Accordion.jsx'
import { Context } from '../store/appContext.js'
import "../../styles/accordion.css"
import { Resumen } from '../component/Resumen.jsx'

const savedInfo = JSON.parse(localStorage.getItem("userInfo"))

const initialValue = {
    contacto: savedInfo?.contacto || "",
    nombre: savedInfo?.nombre || "",
    direccion: savedInfo?.direccion || "",
    estado: savedInfo?.estado || "",
    ciudad: savedInfo?.ciudad || "",
    codigoPostal: savedInfo?.codigoPostal || ""
}

export const Pedido = () => {
    const [userData, setUserData] = useState(initialValue)
    const [saveInfo, setSaveInfo] = useState(true)
    const { actions } = useContext(Context)

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    if (saveInfo == true) {
        localStorage.setItem("userInfo", JSON.stringify(userData))
    } else {
        localStorage.removeItem("userInfo")
    }

    const handleShip = () => {
        // Verifica que ningun input este vacio
        for (let campo in userData) {
            if (userData[campo] == "") return (
                toast.error(`Campo Obligatorio: ${campo}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            )
        }
        console.log("fuera del for")
    }

    return (
        <>
            <div className="accordion mb-3 mt-1" id="accordionResumen">
                <div className="accordion-item">
                    <h6 className="accordion-header">
                        <button className="accordion-button collapsed accordionButtonResumen" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResumen" aria-expanded="true" aria-controls="collapseOne">
                            Resumen de Compra
                        </button>
                    </h6>
                    <div id="collapseResumen" className="accordion-collapse collapse" data-bs-parent="#accordionResumen">
                        <div className="accordion-body">
                            <div className='border-bottom border-dark-subtle w-100 d-flex justify-content-between'>
                                Total: <b>{`$${actions.getTotal()} USD`}</b>
                                </div>
                            <Resumen/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <form className='my-2'>
                    <label className='form-label fw-semibold'>Contacto</label>
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder='Correo electronico o numero de telefono'
                        name='contacto'
                        value={userData.contacto}
                        onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label fw-semibold'>Nombre</label>
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder='Nombre Completo'
                        name='nombre'
                        value={userData.nombre}
                        onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label fw-semibold'>Direccion</label>
                    <input
                        type="text"
                        className='form-control mb-2'
                        placeholder='Direccion'
                        name='direccion'
                        value={userData.direccion}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        className='form-control mb-2'
                        placeholder='Estado'
                        name='estado'
                        value={userData.estado}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        className='form-control mb-2'
                        placeholder='Ciudad'
                        name='ciudad'
                        value={userData.ciudad}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="number"
                        className='form-control mb-3'
                        placeholder='Codigo Postal'
                        name='codigoPostal'
                        value={userData.codigoPostal}
                        onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label fw-semibold'>Informacion de Pago</label>
                    <Accordion />
                </form>
                <div className="form-check form-check-reverse">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="reverseCheck1"
                        defaultChecked
                        onClick={() => {
                            if (saveInfo == true) return setSaveInfo(false)
                            setSaveInfo(true)
                        }}
                    />
                    <label className="form-check-label" htmlFor="reverseCheck1">
                        ¿Desea guardar su informacion?
                    </label>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <button className="btn btn-dark" onClick={() => handleShip()}>Confirmar Pedido</button>
                </div>
            </div>
        </>
    )
}
