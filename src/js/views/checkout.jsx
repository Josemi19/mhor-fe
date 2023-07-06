import React from 'react'

export const Checkout = () => {
    return (
        <>
            <div className="text-center d-flex flex-column justify-content-center" style={{"minHeight": "85vh"}}>
                <div className='bg-light p-2'>
                    <h4>Gracias por tu compra</h4>
                    <div className='border border-dark'>
                        <p>Tendras mas detalles de tu pedido en tu correo electronico</p>
                        <p>Por favor envianos el comprobante de pago a nuestro<a href="https://api.whatsapp.com/send/?phone=584140264565&text&type=phone_number&app_absent=0" className="navbar-brand" target="_blank" style={{ color: "#25D366" }}> WhatsApp</a></p>
                    </div>
                    <h5>Esperamos verte de nuevo</h5>
                </div>
            </div>
        </>
    )
}
