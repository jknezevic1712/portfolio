import Hero from '../components/templates/Hero';
import WorkExperience from '../components/templates/WorkExperience';
import About from '../components/templates/About';
import SideProjects from '../components/templates/SideProjects';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-16">
			<div className="flex flex-col items-center gap-12 max-w-3xl">
				<Hero />
				<About />
				<WorkExperience />
				<SideProjects />
			</div>
		</main>
	);
}
