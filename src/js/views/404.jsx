import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">
                            La pagina que estabas buscando no existe aqui
                        </div>
                        <Link to="/">
                            <span className="btn btn-outline-dark">Volver al Inicio</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;