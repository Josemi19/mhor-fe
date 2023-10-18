import React from "react";
import { Carousel } from "../component/Carousel.jsx";
import { Cards } from "../component/Cards.jsx";
import { ItemCar } from "../component/itemCar.jsx";
import foto2 from "../../img/foto2.jpg"
import AOS from 'aos';
import { Helmet } from "react-helmet";

AOS.init();

export const Home = () => {

	return (
		<div className="text-center">
			<Helmet>
				<title>Mhór Style</title>
			</Helmet>
			<Carousel />
			<div className="container">
				<h1 className="my-3">PRODUCTOS</h1>
				<div className="w-100 position-relative">
					<img src={foto2} className="w-100 d-flex justify-content-end"></img>
					<div className="fondo-home"></div>
					<p className="texto-home">Queremos reafirmar tú estilo único e irrepetible</p>
				</div>
				<Cards categoria={"bolsos"} />
				<Cards categoria={"ropa"} />
			</div>
			<ItemCar />
		</div>
	)
};
