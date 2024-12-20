export default function Header() {
	return (
		<header className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
			<div className="container mx-auto px-4 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					Dr. Roseline Oluwaseun Ogundokun
				</h1>
				<p className="text-xl md:text-2xl mb-4">
					Lecturer in Computer Science, Researcher, and Scholar
				</p>
				<div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg inline-block">
					<p className="text-lg font-semibold">Recent Achievements:</p>
					<ul className="list-disc list-inside text-sm">
						<li>Ranked among top 2% scientists in Nigeria</li>
						<li>36th in SciVal 2024 list of top 500 Nigerian researchers</li>
						<li>Award-winning presenter at Deep Learning Indaba 2024</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
