import WideCard from '../molecules/WideCard';
import HeaderText from '../atoms/HeaderText';
import Paragraph from '../atoms/Paragraph';
import { RESUME_DATA } from '@/lib/data/RESUME_DATA';

export default function PersonalProjects() {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
				Personal projects
			</h3>
			<div className="gap-10 lg:grid lg:grid-cols-1 lg:justify-center lg:gap-5 xl:gap-10">
				{RESUME_DATA.projects.map((project) => {
					return (
						<WideCard key={project.title}>
							<HeaderText
								asLink
								url={project.link}
							>
								{project.title}
							</HeaderText>
							<Paragraph>{project.description}</Paragraph>

							<div className="w-full flex items-center gap-4 mt-3">
								{project.techStack.map((tech: string) => {
									return (
										<div
											key={tech}
											className="text-transparent font-semibold bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text p-2 shadow-md rounded-lg"
										>
											{tech}
										</div>
									);
								})}
							</div>
						</WideCard>
					);
				})}
			</div>
		</section>
	);
}
