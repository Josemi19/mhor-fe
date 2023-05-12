import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carousel } from "../component/Carousel.jsx";
import { Cards } from "../component/Cards.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Carousel/>
		<div className="container">
			<Cards/>
		</div>
	</div>
);
