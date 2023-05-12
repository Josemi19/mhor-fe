import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<div className="container-fluid  d-flex justify-content-between">
			<div className="flex-column d-flex">
				<Link to={"/about"} style={{ "textDecoration": "none", "color": "black" }}>
					<span>Sobre Nosotros</span>
				</Link>
				<span>© Mhor Style 2022</span>
			</div>
			<div className="d-flex gap-3">
				<a href="https://instagram.com/mhorstyle?igshid=MTIyMzRjYmRlZg==" className="navbar-brand"><i className="bi bi-instagram"></i></a>
				<a href="mailto:mhorstyle@gmail.com" className="navbar-brand"><i className="bi bi-envelope-fill"></i></a>
				<a href="https://api.whatsapp.com/send/?phone=584140264565&text&type=phone_number&app_absent=0" className="navbar-brand"><i className="bi bi-whatsapp"></i></a>
			</div>
		</div>
	</footer>
);
