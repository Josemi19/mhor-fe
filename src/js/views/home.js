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
		<main className="text-center">
			<Helmet>
				<title>Mhór Style</title>
			</Helmet>
			<Carousel />
			<section className="container">
				<h1 className="mt-3 mb-1"><b>LA MARCA</b></h1>
				<p className="fs-5">Integra diseño, fabricación y comercialización de: ropa, carteras y accesorios. Todos los atuendos buscan que tu estilo se reafirme como único e irrepetible.</p>
				<p className="fs-5">La idea es que cada vez que uses nuestras piezas te sientas identificad@, segur@, cómod@ y confiad@; ya que resaltarás tu estilo con prendas de  altísima calidad con sello venezolano.</p>
				<p className="fs-5">Las tendencias evolucionan o simplemente pasan, pero el estilo perdura por siempre.</p>
				<div className="w-100 position-relative">
					<img src={foto2} className="w-100 d-flex justify-content-end rounded"></img>
					<div className="fondo-home rounded"></div>
					<p className="texto-home px-1">Queremos reafirmar tú estilo único e irrepetible</p>
				</div>
				<Cards categoria={"bolsos"} />
				<Cards categoria={"ropa"} />
			</section>
			<ItemCar />
		</main>
	)
};
