import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import WorkExperience from '@/components/organisms/WorkExperience';
import Education from '@/components/organisms/Education';
import Skills from '@/components/organisms/Skills';
import SideProjects from '@/components/organisms/SideProjects';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-16">
			<div className="flex flex-col items-center gap-12 max-w-3xl">
				<Hero />
				<About />
				<WorkExperience />
				<Education />
				<Skills />
				<SideProjects />
			</div>
		</main>
	);
}
