import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Accordion } from '../component/Accordion.jsx'

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

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    if (saveInfo == true) {
        localStorage.setItem("userInfo", JSON.stringify(userData))
    } else {
        localStorage.removeItem("userInfo")
    }

    const handleShip = () => {
        for (let campo in userData) {
            if (userData[campo] == "") return (
                toast.error(`Todos los campos son requeridos: ${campo}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            )
        }
    }

    return (
        <>
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
                        type="text"
                        className='form-control mb-2'
                        placeholder='Codigo Postal'
                        name='codigoPostal'
                        value={userData.codigoPostal}
                        onChange={(e) => handleChange(e)}
                    />
                    <label className='form-label fw-semibold'>Informacion de Pago</label>
                    <Accordion/>
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
                    <button className="btn btn-outline-dark" onClick={() => handleShip()}>Confirmar Pedido</button>
                </div>
            </div>
        </>
    )
}
