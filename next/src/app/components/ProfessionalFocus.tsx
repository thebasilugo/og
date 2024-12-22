export default function ProfessionalFocus() {
	return (
		<section className="py-16 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Professional Focus
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Educator</h3>
						<p className="text-gray-700">
							Inspiring and empowering students through comprehensive and
							hands-on learning approaches in computer science.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Research Leader</h3>
						<p className="text-gray-700">
							Spearheading advancements in computer vision, information
							security, and artificial intelligence through collaborative
							projects.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Mentor</h3>
						<p className="text-gray-700">
							Guiding aspiring researchers and junior faculty members, fostering
							a supportive environment for growth and innovation.
						</p>
					</div>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6">
					<h3 className="text-xl font-semibold mb-4">Multifaceted Approach</h3>
					<p className="text-gray-700 mb-4">
						Dr. Ogundokun's approach to teaching, research, and mentorship not
						only contributes to the academic community but also empowers the
						next generation of innovators and thought leaders in computer
						science.
					</p>
					<ul className="list-disc list-inside text-gray-700">
						<li>
							Integrates current research and industry practices into curriculum
						</li>
						<li>Collaborates with a diverse network of experts worldwide</li>
						<li>Addresses complex problems bridging academia and industry</li>
						<li>Fosters critical skills and confidence in mentees</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
