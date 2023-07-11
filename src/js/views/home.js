import React, { useContext } from "react";
import { Carousel } from "../component/Carousel.jsx";
import { Cards } from "../component/Cards.jsx";
import { ItemCar } from "../component/itemCar.jsx";
import foto1 from "../../img/foto1.jpg"
import AOS from 'aos';
import { Context } from "../store/appContext.js";

AOS.init();

export const Home = () => {
	const { actions } = useContext(Context)

	return (
		<div className="text-center">
			<Carousel />
			<div className="container">
				<h1 className="my-3">PRODUCTOS</h1>
				<div className="w-100 position-relative">
					<img src={foto1} className="w-100 d-flex justify-content-end"></img>
					<div className="fondo-home"></div>
					<p className="texto-home">Queremos reafirmar tú estilo único e irrepetible</p>
				</div>
				<Cards categoria={"carteras"} />
				<Cards categoria={"prendas"} />
			</div>
			<ItemCar />
		</div>
	)
};
