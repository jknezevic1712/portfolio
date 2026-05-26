import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { TechStackBadges } from '../molecules/TechStackBadges';

export default function WorkExperience() {
	return (
		<section className="mb-5 mt-10 w-full max-w-7xl">
			<div className="mb-20">
				<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
					Work experience
				</h3>

				{RESUME_DATA.work.map((workExp) => {
					return (
						<div
							key={workExp.company}
							className="flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-center justify-start rounded-xl py-10 px-4 text-center my-5 md:my-10 lg:transition-all lg:duration-500 lg:hover:-translate-y-2 lg:hover:backdrop-blur-md"
						>
							<div className="w-full grid grid-cols-2">
								<h3 className="font-futura text-start text-xl font-bold md:text-3xl 2xl:text-3xl">
									{workExp.company}
								</h3>

								<div className="flex items-center justify-end text-sm">
									<span>
										{workExp.start} - {workExp.end ?? 'Present'}
									</span>
								</div>
							</div>

							<div className="w-full flex text-base justify-start items-center font-medium">
								<span>{workExp.role}</span>
							</div>

							<p className="font-light text-sm py-2 text-start 2xl:text-lg">
								{workExp.description}
							</p>

							<div className="w-full flex flex-col items-start justify-center gap-y-6 mt-2 mb-6">
								{workExp.highlights.map((highlight: string) => (
									<div
										key={highlight}
										className="grid grid-flow-col items-center pl-3 gap-5"
									>
										<HiOutlineArrowNarrowRight className="col-span-2" />
										<span className="font-light text-start text-xs xl:text-sm">
											{highlight}
										</span>
									</div>
								))}
							</div>

							<div className="w-full flex flex-wrap items-center justify-start gap-2">
								<TechStackBadges badges={workExp.badges} />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
