"use client";

import { useState } from "react";

interface EducationItem {
	degree: string;
	institution: string;
	description: string;
	additionalInfo: string;
}

const educationData: EducationItem[] = [
	{
		degree: "BSc in Management Information Systems",
		institution: "Covenant University, Ota",
		description:
			"Dr. Ogundokun completed her Bachelor of Science in Management Information Systems, where she developed foundational skills in both information systems and management.",
		additionalInfo:
			"Her studies covered subjects such as database management, systems analysis, and programming. Graduating with high honors, she showcased her commitment to academic excellence from the start of her career.",
	},
	{
		degree: "MSc in Computer Science",
		institution: "University of Ilorin",
		description:
			"Continuing her academic journey, Dr. Ogundokun pursued her Master's degree in Computer Science, focusing on artificial intelligence, data structures, and algorithms.",
		additionalInfo:
			"Her research delved into the intersection of technology and information security, setting a strong foundation for her future work in these areas.",
	},
	{
		degree: "PhD in Computer Science",
		institution: "University of Ilorin",
		description:
			"Dr. Ogundokun earned her PhD, focusing on innovative methods in steganography and cryptography.",
		additionalInfo:
			"Her thesis contributed significantly to cybersecurity, offering potential applications in secure information exchange.",
	},
	{
		degree: "PhD in Multimedia Engineering (in progress)",
		institution: "Kaunas University of Technology",
		description:
			"Currently, Dr. Ogundokun is expanding her expertise in multimedia engineering.",
		additionalInfo:
			"Her research focuses on multimedia systems, deep learning applications, and image processing, addressing key challenges in the field.",
	},
];

export default function Education() {
	const [expandedItems, setExpandedItems] = useState<{
		[key: string]: boolean;
	}>({});

	const toggleExpand = (degree: string) => {
		setExpandedItems((prev) => ({ ...prev, [degree]: !prev[degree] }));
	};

	return (
		<section className="py-16">
			<h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
			<div className="space-y-6">
				{educationData.map((item, index) => (
					<div key={index} className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
						<p className="text-gray-600 mb-4">{item.institution}</p>
						<p className="text-gray-700 mb-4">{item.description}</p>
						{expandedItems[item.degree] && (
							<p className="text-gray-600 mt-4">{item.additionalInfo}</p>
						)}
						<button
							className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
							onClick={() => toggleExpand(item.degree)}
						>
							{expandedItems[item.degree] ? "View Less" : "View More"}
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
