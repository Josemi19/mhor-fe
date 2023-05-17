import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OffCanvas } from "./OffCanvas.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to={'/cart'} className='link'>
					<span className="fs-4">{store.cart.length}</span>
					<i className="fa-solid fa-bag-shopping mx-2 fs-4" style={{ "color": "#000000" }}></i>
				</Link>
				<Link to={"/"} className="navbar-brand fs-2" style={{"marginRight": "0"}}>MHOR</Link>
				<OffCanvas />
			</div>
		</nav>
	);
};
