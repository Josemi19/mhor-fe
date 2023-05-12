import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OffCanvas } from "./OffCanvas.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to={'/cart'} style={{ "textDecoration": "none", "color": "black" }}>
					<span>{store.cart.length}</span>
					<i className="fa-solid fa-bag-shopping mx-2" style={{ "color": "#000000" }}></i>
				</Link>
				<Link to={"/"} className="navbar-brand">MHOR</Link>
				<OffCanvas />
			</div>
		</nav>
	);
};
