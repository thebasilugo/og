import { Book, Award } from "lucide-react";

export default function Projects() {
	const publications = [
		"Ogundokun, R. O., et al. (2021). 'Machine learning prediction of COVID-19 pandemic: comparative analysis of support vector machine, logistic regression and artificial neural network models.' Journal of Biomedical Informatics.",
		"Ogundokun, R. O., et al. (2020). 'Predictive modelling of COVID-19 confirmed cases in Nigeria.' Infectious Disease Modelling.",
		"Ogundokun, R. O., & Awotunde, J. B. (2019). 'Machine learning algorithm for wireless sensor networks: A systematic review.' International Journal of Engineering and Manufacturing.",
	];

	return (
		<section className="py-12 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-6">Research and Projects</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-2xl font-semibold mb-4 flex items-center">
							<Book className="mr-2" />
							Selected Publications
						</h3>
						<ul className="space-y-4">
							{publications.map((pub, index) => (
								<li key={index} className="bg-white p-4 rounded shadow">
									{pub}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-2xl font-semibold mb-4 flex items-center">
							<Award className="mr-2" />
							Achievements
						</h3>
						<ul className="space-y-4">
							<li className="bg-white p-4 rounded shadow">
								Best Paper Award at the International Conference on Data Science
								and Machine Learning, 2022
							</li>
							<li className="bg-white p-4 rounded shadow">
								Research Grant for Innovative AI Applications in Healthcare,
								2021
							</li>
							<li className="bg-white p-4 rounded shadow">
								Outstanding Educator Award, Landmark University, 2020
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
