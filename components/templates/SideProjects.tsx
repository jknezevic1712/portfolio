import HeaderText from '../atoms/HeaderText';
import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import { TechStackBadges } from '../molecules/TechStackBadges';

export default function SideProjects() {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
				Side projects
			</h3>
			<div className="grid grid-cols-1 justify-center xl:gap-10">
				{RESUME_DATA.projects.map((project) => {
					return (
						<div
							key={project.title}
							className={`flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-start justify-start rounded-xl py-10 px-4 text-start lg:hover:-translate-y-2 lg:transition-all lg:duration-500 lg:hover:backdrop-blur-md gap-4 group my-5 md:my-10`}
						>
							<HeaderText
								asLink
								url={project.link}
							>
								{project.title}
							</HeaderText>

							<p className="font-light text-sm py-2 text-start 2xl:text-lg">
								{project.description}
							</p>

							<div className="w-full flex flex-wrap items-center justify-start gap-2">
								<TechStackBadges badges={project.techStack} />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
