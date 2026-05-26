import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import { TechStackBadges } from '../molecules/TechStackBadges';

export default function Skills() {
	return (
		<section className="mb-5 mt-10 w-full max-w-7xl">
			<div className="mb-20">
				<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
					Skills
				</h3>

				<div className="w-full flex flex-wrap items-center justify-start gap-2 py-10 px-4 my-5 md:my-10 lg:transition-all lg:duration-500 lg:hover:-translate-y-2 lg:hover:backdrop-blur-md">
					<TechStackBadges badges={RESUME_DATA.skills} />
				</div>
			</div>
		</section>
	);
}
