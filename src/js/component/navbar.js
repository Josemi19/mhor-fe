import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OffCanvas } from "./OffCanvas.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand fs-2" style={{"marginRight": "0"}}>MHÓR</Link>
				<OffCanvas />
			</div>
		</nav>
	);
};
