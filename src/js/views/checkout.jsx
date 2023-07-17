import React, { useContext } from 'react'
import { PaymentMethods } from "../component/PaymentMethods.jsx"
import { Context } from '../store/appContext.js'
import { useNavigate } from 'react-router'

export const Checkout = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()

    const handleClick = () => {
        actions.handleFinishPayment()
        navigate("/")
    }

    return (
        <>
            <div style={{ "minHeight": "85vh" }}>
                <div className="text-center d-flex flex-column border border-dark mt-3">
                    <div className='p-2'>
                        <h1>Gracias por tu compra</h1>
                        <h2>Por favor, selecciona uno de nuestros metodos de pago:</h2>
                        <PaymentMethods />
                        <div>
                            <p>Recuerda enviarnos el comprobante de pago a nuestro<a href="https://api.whatsapp.com/send/?phone=584140264565&text&type=phone_number&app_absent=0" className="navbar-brand" target="_blank" style={{ color: "#25D366" }}> WhatsApp</a> para culminar tu compra</p>
                            <p>Podras ver un resumen de tu pedido en tu correo electrónico</p>
                        </div>
                        <h5>Esperamos verte de nuevo</h5>
                        <button className='btn btn-dark' onClick={() => handleClick()}>Terminar Pedido</button>
                    </div>
                </div>
            </div>
        </>
    )
}
