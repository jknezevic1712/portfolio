import { RESUME_DATA } from '@/lib/data/RESUME_DATA';

export default function Education() {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
				Education
			</h3>
			<div className="grid grid-cols-1 justify-center xl:gap-10">
				{RESUME_DATA.educations.map((education) => {
					return (
						<div
							key={education.school}
							className="flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-center justify-start rounded-xl py-10 px-4 text-center my-5 md:my-10 lg:transition-all lg:duration-500 lg:hover:-translate-y-2 lg:hover:backdrop-blur-md"
						>
							<div className="w-full grid grid-cols-2">
								<h3 className="font-futura text-start text-xl font-bold md:text-3xl 2xl:text-3xl">
									{education.school}
								</h3>

								<div className="flex items-center justify-end text-sm">
									<span>
										{education.start} - {education.end ?? 'Present'}
									</span>
								</div>
							</div>

							<div className="w-full flex text-base justify-start items-center font-medium">
								<span>{education.degree}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
