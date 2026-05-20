import HeaderText from '../atoms/HeaderText';
import Paragraph from '../atoms/Paragraph';
import { RESUME_DATA } from '@/lib/data/RESUME_DATA';

export default function PersonalProjects() {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
				Personal projects
			</h3>
			<div className="grid grid-cols-1 justify-center xl:gap-10">
				{RESUME_DATA.projects.map((project) => {
					return (
						<div
							key={project.title}
							className={`flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-start justify-start rounded-xl p-10 text-start shadow-lg dark:bg-gray-200 lg:hover:-translate-y-2 lg:transition-all lg:duration-500 lg:hover:shadow-3xl gap-4 group my-5 md:my-10`}
						>
							<HeaderText
								asLink
								url={project.link}
							>
								{project.title}
							</HeaderText>

							<Paragraph>{project.description}</Paragraph>

							<div className="w-full flex flex-wrap items-center gap-4 mt-3">
								{project.techStack.map((tech: string) => {
									return (
										<div
											key={tech}
											className="text-transparent font-semibold bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text p-2 shadow-md rounded-lg w-full md:w-auto text-xs 2xl:text-base"
										>
											{tech}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
