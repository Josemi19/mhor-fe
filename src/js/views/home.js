import React from "react";
import { Carousel } from "../component/Carousel.jsx";
import { Cards } from "../component/Cards.jsx";
import { ItemCar } from "../component/itemCar.jsx";
import foto1 from "../../img/SILVIA-3.jpg"


export const Home = () => (
	<div className="text-center" style={{"minHeight": "85vh"}}>
		<Carousel />
		<div className="container">
			<Cards categoria={"carteras"}/>
			<div className="w-100 position-relative">
				<img src={foto1} className="w-100 d-flex justify-content-end"></img>
				<div className="fondo-home"></div>
				<p className="texto-home">Queremos reafirmar tú estilo único e irrepetible</p>
			</div>
			<Cards categoria={"prendas"}/>
		</div>
		<ItemCar />
	</div>
);
