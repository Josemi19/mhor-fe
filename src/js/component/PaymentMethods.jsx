import React, { useContext, useEffect, useState } from 'react'
import "../../styles/accordion.css"
import { Context } from '../store/appContext'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const PaymentMethods = () => {
    const { actions, store } = useContext(Context)
    const precioDolar = store.dolar?.dollar.toFixed(2)

    useEffect(() => {
        actions.getDollarPrice()
    }, [])

    return (
        <>
            <div className="accordion" id="accordionExample">
                {/* PAGO MOVIL */}
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Pago Móvil
                        </button>
                    </h4>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-center">
                            <span>Tasa de Cambio BCV: <b>{precioDolar}</b></span>
                            <br />
                            <span>Total en BS: <b>{(actions.getTotal() * precioDolar).toFixed(2)}</b></span>
                            <br />
                            <span>Datos:</span>
                            <br />
                            <span>Banco: <b>0105 - Mercantil</b></span>
                            <br />
                            <span className='me-1'>Nro. de Teléfono: <b>0424-107-1806</b></span>
                            <CopyToClipboard
                                text="1071806"
                                onCopy={() => toast.success("Copiado", {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })}>
                                <i className="fa-solid fa-copy"></i>
                            </CopyToClipboard>
                            <br />
                            <span className='me-1'>Nro. de Cédula: <b>27223205</b></span>
                            <CopyToClipboard
                                text="27223205"
                                onCopy={() => toast.success("Copiado", {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })}>
                                <i className="fa-solid fa-copy"></i>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                {/* TERMINA PAGO MOVIL */}
                {/* BINANCE */}
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Binance (USDT)
                        </button>
                    </h4>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-center">
                            <span className='me-1'>
                                Correo: <b>josemmorrone@gmail.com</b>
                            </span>
                            <CopyToClipboard
                                text="josemmorrone@gmail.com"
                                onCopy={() => toast.success("Copiado", {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })}>
                                <i className="fa-solid fa-copy"></i>
                            </CopyToClipboard>
                            <br />
                            <span className='me-1'>Nro. de Teléfono: <b>+58 4241071806</b></span>
                            <CopyToClipboard
                                text="4241071806"
                                onCopy={() => toast.success("Copiado", {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })}>
                                <i className="fa-solid fa-copy"></i>
                            </CopyToClipboard>
                            <br />
                            <span className='me-1'>Pay ID: <b>250741670</b></span>
                            <CopyToClipboard
                                text="250741670"
                                onCopy={() => toast.success("Copiado", {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })}>
                                <i className="fa-solid fa-copy"></i>
                            </CopyToClipboard>
                            <br />
                            <span className='me-1'>Binance ID: <b>245511393</b></span>
                            <CopyToClipboard
                                text="245511393"
                                onCopy={() => toast.success("Copiado", {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })}>
                                <i className="fa-solid fa-copy"></i>
                            </CopyToClipboard>
                            <br />
                            <span><b>Nota:</b> Solo pagos en USDT</span>
                            <br />
                            <span>
                                <a className='btn btn-outline-dark mt-2' href="https://www.binance.com/en/my/wallet/account/payment/send" target="_blank" rel="noopener noreferrer">Ir a Pagar</a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* TERMINA BINANCE */}
                {/* PAYPAL */}
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Paypal
                        </button>
                    </h4>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-center">
                            <span><b>NOTA:</b> Los pagos en Paypal tienen un recargo del <b>6%</b> del total</span>
                            <br />
                            <span>Nuevo Total: <b>{(actions.getTotal() * 0.06) + actions.getTotal()}</b></span>
                            <br />
                            <span>
                                <a className='btn btn-outline-dark mt-2' href="https://www.paypal.me/JMorroneDore" target="_blank" rel="noopener noreferrer">Ir a Pagar</a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* TERMINA PAYPAL */}
            </div >
        </>
    )
}
