import Hero from '../components/templates/Hero';
import WorkExperience from '../components/templates/WorkExperience';
import About from '../components/templates/About';
import PersonalProjects from '../components/templates/PersonalProjects';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-16">
			<div className="flex flex-col items-center gap-12 max-w-3xl">
				<Hero />
				<About />
				<WorkExperience />
				<PersonalProjects />
			</div>
		</main>
	);
}
