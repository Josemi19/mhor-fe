import React from "react";
import { Carousel } from "../component/Carousel.jsx";
import { Cards } from "../component/Cards.jsx";
import { ItemCar } from "../component/itemCar.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Carousel />
		<div className="container">
			<Cards categoria={"carteras"}/>
			<Cards categoria={"prendas"}/>
		</div>
		<ItemCar />
	</div>
);
