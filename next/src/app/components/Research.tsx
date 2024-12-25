import Link from "next/link";

const researchAreas = [
	{
		title: "Computer Vision",
		description:
			"Development of systems for image recognition and analysis, leveraging deep learning techniques to improve accuracy and efficiency.",
	},
	{
		title: "Deep Learning",
		description:
			"Focused on creating advanced neural networks that enhance image classification, object detection, and other AI-driven tasks.",
	},
	{
		title: "Medical Imaging",
		description:
			"Innovations in medical image processing for diagnostics, particularly in the detection and analysis of complex medical conditions using AI.",
	},
	{
		title: "Image Processing",
		description:
			"Advanced algorithms for filtering, transforming, and analyzing digital images, essential in fields from security to medical diagnostics.",
	},
	{
		title: "Steganography and Cryptography",
		description:
			"Security-focused research, providing methods for hiding and encrypting data to protect sensitive information from unauthorized access.",
	},
	{
		title: "Information Security",
		description:
			"Broad expertise in ensuring data integrity and confidentiality, with applications across various industries needing secure data handling.",
	},
	{
		title: "Artificial Intelligence",
		description:
			"Pioneering research in machine learning and AI, with applications in predictive analysis, automation, and decision support systems.",
	},
];

export default function Research() {
	return (
		<section className="py-16 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Research and Academic Contributions
				</h2>
				<p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
					Dr. Ogundokun has established herself as a prominent researcher in
					several specialized fields within computer science, contributing
					significantly to advancing knowledge and practical applications.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{researchAreas.map((area, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-xl font-semibold mb-2">{area.title}</h3>
							<p className="text-gray-700">{area.description}</p>
						</div>
					))}
				</div>
				<div className="text-center">
					<p className="text-gray-700 mb-4">
						Dr. Ogundokun's research is highly regarded globally, with
						approximately 131 articles indexed in SCOPUS and over 171
						publications on Google Scholar and Web of Science (WoS).
					</p>
					<div className="space-x-4">
						<Link
							href="https://www.scopus.com/authid/detail.uri?authorId=57203967424"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
						>
							SCOPUS Profile
						</Link>
						<Link
							href="https://scholar.google.com/citations?user=-zGUzP8AAAAJ&hl=en&oi=ao"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
						>
							Google Scholar Profile
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
