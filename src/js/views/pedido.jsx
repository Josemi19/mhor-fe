import React, { useEffect, useState } from 'react'

const savedInfo = JSON.parse(localStorage.getItem("userInfo"))

const initialValue = {
    contacto: savedInfo?.contacto || "",
    nombre: "",
    direccion: "",
    estado: "",
    ciudad: "",
    codigoPostal: ""
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

    return (
        <>
            <div className="container">
                <form>
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
                </form>
                <button onClick={() => {
                    if (saveInfo == true) return setSaveInfo(false)
                    setSaveInfo(true)
                }}
                >
                    guardar info
                </button>
            </div>
        </>
    )
}
