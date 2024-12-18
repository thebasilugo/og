import Link from "next/link";

export default function FutureDirections() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Future Directions
				</h2>
				<div className="bg-white rounded-lg shadow-md p-6">
					<p className="text-gray-700 mb-4">
						Dr. Ogundokun is currently working toward completing her second PhD
						in Multimedia Engineering, a field that combines{" "}
						<strong>
							computer science, digital media, and communication technologies
						</strong>
						. This advanced research will allow her to deepen her expertise in
						multimedia applications, including{" "}
						<Link
							href="#"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							interactive media
						</Link>
						,{" "}
						<Link
							href="#"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							computer graphics
						</Link>
						, and{" "}
						<Link
							href="#"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							digital signal processing
						</Link>
						.
					</p>
					<p className="text-gray-700 mb-4">
						Her future research ambitions include expanding her portfolio to
						encompass <strong>emerging technologies</strong> in multimedia and
						artificial intelligence, such as{" "}
						<Link
							href="#"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							virtual reality (VR)
						</Link>{" "}
						and{" "}
						<Link
							href="#"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							augmented reality (AR)
						</Link>
						, as well as exploring <strong>data-driven methodologies</strong>{" "}
						for personalized user experiences.
					</p>
					<p className="text-gray-700 mb-4">
						Her ongoing work will also focus on{" "}
						<strong>
							global collaboration and technology-driven social impact
						</strong>
						. Dr. Ogundokun envisions her studies to contribute not only to
						academic research but also to practical applications that address
						pressing societal needs, such as accessible education, healthcare
						innovation, and digital inclusion.
					</p>
					<p className="text-gray-700">
						Her visionary goals include nurturing a generation of researchers
						who are driven by curiosity and a sense of purpose, empowering them
						to pursue breakthroughs that redefine the future of technology.
					</p>
				</div>
			</div>
		</section>
	);
}
