import plahutica from '../../public/plahutica-showcase.webp';
import crwn_clothing from '../../public/crwn_clothing-showcase.webp';
import recipe_o_mat from '../../public/recipe_o_mat-showcase.webp';
import tmb from '../../public/tmb-showcase.webp';
import better_timer from '../../public/better_timer-showcase.webp';

import WideCard from '../molecules/WideCard';
import Header2 from '../atoms/Header2';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';

export default function PersonalProjects() {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
				Personal projects
			</h3>
			{/* <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:gap-10"> */}
			<div className="gap-10 lg:grid lg:grid-cols-1 lg:justify-center lg:gap-5 xl:gap-10">
				<WideCard url="https://plahutica.vercel.app/">
					<Header2>Plahutica</Header2>
					<div className="img-inherit_dimensions border border-gray-950 rounded-sm lg:group-hover:scale-105 lg:transition-all lg:duration-500">
						<Img
							type="PROJECT"
							src={plahutica}
						/>
					</div>
					<Paragraph>
						Travelling on a budget guide here to help you out with useful ideas
						or advices for your journey.
					</Paragraph>
				</WideCard>

				<WideCard url="https://recipe-o-mat.web.app/">
					<Header2>Recipe-O-Mat</Header2>
					<div className="img-inherit_dimensions border border-gray-950 rounded-sm lg:group-hover:scale-105 lg:transition-all lg:duration-500">
						<Img
							type="PROJECT"
							src={recipe_o_mat}
						/>
					</div>

					<Paragraph>
						Check out some amazing recipes or share yours with others!
					</Paragraph>
				</WideCard>

				<WideCard url="https://crwn-clothing-jk.vercel.app/">
					<Header2>Crown Clothing</Header2>
					<div className="img-inherit_dimensions border border-gray-950 rounded-sm lg:group-hover:scale-105 lg:transition-all lg:duration-500">
						<Img
							type="PROJECT"
							src={crwn_clothing}
						/>
					</div>

					<Paragraph>Web shop with various products.</Paragraph>
				</WideCard>

				<WideCard url="https://tmb-jk.vercel.app/">
					<Header2>Task Management Board</Header2>

					<div className="img-inherit_dimensions border border-gray-950 rounded-sm lg:group-hover:scale-105 lg:transition-all lg:duration-500">
						<Img
							type="PROJECT"
							src={tmb}
						/>
					</div>

					<Paragraph>
						Application providing you with an overview of tasks you create and
						manipulate with.
					</Paragraph>
				</WideCard>

				<WideCard url="https://better-timer.vercel.app/">
					<Header2>Better Timer</Header2>

					<div className="img-inherit_dimensions border border-gray-950 rounded-sm lg:group-hover:scale-105 lg:transition-all lg:duration-500">
						<Img
							type="PROJECT"
							src={better_timer}
						/>
					</div>

					<Paragraph>
						Easily track time spent on your tasks using Better Timer!
					</Paragraph>
				</WideCard>
			</div>
		</section>
	);
}
