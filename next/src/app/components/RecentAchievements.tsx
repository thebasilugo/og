export default function RecentAchievements() {
	return (
		<section className="py-16 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Recent Achievements
				</h2>
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<h3 className="text-2xl font-semibold mb-4">
						Deep Learning Indaba 2024
					</h3>
					<p className="text-gray-700 mb-4">
						Dr. Ogundokun had a successful and fulfilling week at the Deep
						Learning Indaba 2024, which took place from September 1st to 7th in
						Dakar, Senegal. She was awarded a travel and accommodation
						fellowship to attend this impactful event.
					</p>
					<h4 className="text-xl font-semibold mb-2">Poster Presentations:</h4>
					<ul className="list-disc list-inside mb-4">
						<li className="mb-2">
							"Development of a Comprehensive African Sitting Posture Dataset
							for AI-Driven Health Monitoring and Posture Recognition"
						</li>
						<li className="mb-2">
							"MCNN-AM: Enhancing Human Posture Detection with Hybrid VGG16-CNN
							Models and Attention Mechanisms" (Publication poster presentation)
						</li>
					</ul>
					<p className="text-gray-700 font-semibold">
						The publication poster presentation was awarded a cash prize of
						$250!
					</p>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6">
					<h3 className="text-2xl font-semibold mb-4">Research Recognition</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>
							Ranked 3rd among top scientists in Nigeria for the publication:
							"Mobilenet-Svm: A Lightweight Deep Transfer Learning Model To
							Diagnose Bch Scans For Iomt-Based Imaging Sensors"
						</li>
						<li>
							Listed as 36th in the SciVal 2024 list of top 500 Nigerian
							researchers
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
