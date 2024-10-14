import React from "react";

const Carousel = () => (
	<section className="container mx-auto px-4 py-8 text-center">
		<h2 className="text-2xl font-semibold text-deep-blue mb-4">
			Mentees
			<span className="text-lg">
				<i className="arrow right icon"></i>
			</span>
		</h2>
		<div id="carousel" className="carousel">
			{/* Carousel items will be dynamically added here */}
		</div>
	</section>
);

export default Carousel;
