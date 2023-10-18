import React, { Component } from "react";

export const Footer = () => (
	<div className="footer w-100 py-3">
		<div className="container-fluid  d-flex justify-content-between">
			<div className="d-flex align-items-center">
				<span>© Mhor Style. Todos los derechos reservados</span>
			</div>
			<div className="d-flex gap-3">
				<a href="https://instagram.com/mhorstyle?igshid=MTIyMzRjYmRlZg==" className="navbar-brand" target="_blank"><i className="bi bi-instagram" style={{ color: "#E4405F" }}></i></a>
				<a href="mailto:mhorstyle@gmail.com" className="navbar-brand" target="_blank"><i className="bi bi-envelope-fill"></i></a>
				<a href="https://api.whatsapp.com/send/?phone=584140264565&text&type=phone_number&app_absent=0" className="navbar-brand" target="_blank"><i className="bi bi-whatsapp" style={{ color: "#25D366" }}></i></a>
			</div>
		</div>
	</div>
);
