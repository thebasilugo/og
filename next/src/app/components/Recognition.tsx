const rankings = [
	{
		year: 2024,
		rank: 36,
		description: "Listed in SciVal 2024 top 500 Nigerian researchers.",
	},
	{
		year: 2023,
		rank: 3,
		description:
			"Ranked among top 2% scientists in Nigeria for groundbreaking research in AI-driven medical imaging.",
	},
	{
		year: 2023,
		rank: 28,
		description:
			"Continued ascent in recognition due to recent work and expanded publication portfolio.",
	},
	{
		year: 2022,
		rank: 23,
		description:
			"Notable rise in national standing driven by increased citations and new collaborations.",
	},
	{
		year: 2021,
		rank: 50,
		description:
			"Showcasing growth and expanding influence in computer science and related fields.",
	},
];

export default function Recognition() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Recognition and Rankings
				</h2>
				<p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
					Dr. Ogundokun has achieved prestigious positions in Nigeria's academic
					landscape, consistently ranking among the top researchers in the
					country.
				</p>
				<div className="space-y-6">
					{rankings.map((item, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md p-6">
							<div className="flex items-center justify-between mb-2">
								<span className="text-2xl font-bold text-blue-700">
									{item.year}
								</span>
								<span className="text-lg font-semibold">
									Ranked {item.rank}
									{item.rank === 3 ? "nd" : "th"}
								</span>
							</div>
							<p className="text-gray-700">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
