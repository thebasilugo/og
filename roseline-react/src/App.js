import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Research from "./components/Research";
import Recognition from "./components/Recognition";
import ProfessionalFocus from "./components/ProfessionalFocus";
import FutureDirections from "./components/FutureDirections";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./index.css";

function App() {
	return (
		<div className="bg-gray-100 text-gray-800 mx-auto">
			<Header />
			<main className="container mx-auto px-4 py-8 max-w-4xl text-justify">
				<Education />
				<Research />
				<Recognition />
				<ProfessionalFocus />
				<FutureDirections />
				<Carousel />
			</main>
			<Footer />
		</div>
	);
}

export default App;
