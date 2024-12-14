import Header from "@/app/components/Header";
import RecentAchievements from "@/app/components/RecentAchievements";
import Recognition from "@/app/components/Recognition";
import Research from "@/app/components/Research";
import Education from "@/app/components/Education";
import ProfessionalFocus from "@/app/components/ProfessionalFocus";
import FutureDirections from "@/app/components/FutureDirections";
import MenteeCarousel from "@/app/components/MenteeCarousel";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">
				<RecentAchievements />
				<Recognition />
				<Research />
				<Education />
				<ProfessionalFocus />
				<FutureDirections />
				<MenteeCarousel />
			</main>
			<footer className="bg-gray-800 text-white py-4 text-center">
				<p>
					&copy; {new Date().getFullYear()} Dr. Roseline Oluwaseun Ogundokun.
					All rights reserved.
				</p>
			</footer>
		</div>
	);
}
