import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import { TechStackBadges } from '../molecules/TechStackBadges';
import Section from '../molecules/Section';

export default function Skills() {
	return (
		<Section title="Skills">
			<div className="w-full flex flex-wrap items-center justify-start gap-2 py-10 px-4 my-5 md:my-10 lg:transition-all lg:duration-500 lg:hover:-translate-y-2 lg:hover:backdrop-blur-md">
				<TechStackBadges badges={RESUME_DATA.skills} />
			</div>
		</Section>
	);
}
