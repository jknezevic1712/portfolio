import plahutica from '../../public/plahutica-showcase.webp';
import crwn_clothing from '../../public/crwn_clothing-showcase.webp';
import recipe_o_mat from '../../public/recipe_o_mat-showcase.webp';
import tmb from '../../public/tmb-showcase.webp';
import better_timer from '../../public/better_timer-showcase.webp';

import Paragraph from '../atoms/Paragraph';
import Img from '../atoms/Img';
import Card from '../molecules/Card';

export default function PersonalProjects() {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
				Personal projects
			</h3>
			<div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:gap-10">
				<Card url="https://plahutica.vercel.app/">
					<Img src={plahutica} />
					<h2>Plahutica</h2>
					<Paragraph>
						Travelling on a budget guide here to help you out with useful ideas
						or advices for your journey.
					</Paragraph>
				</Card>

				<Card url="https://recipe-o-mat.web.app/">
					<Img src={recipe_o_mat} />
					<h2>Recipe-O-Mat</h2>
					<Paragraph>
						Check out some amazing recipes or share yours with others!
					</Paragraph>
				</Card>

				<Card url="https://crwn-clothing-jk.vercel.app/">
					<Img src={crwn_clothing} />
					<h2>Crown Clothing</h2>
					<Paragraph>Web shop with various products.</Paragraph>
				</Card>

				<Card url="https://tmb-jk.vercel.app/">
					<Img src={tmb} />
					<h2>Task Management Board</h2>
					<Paragraph>
						Application providing you with an overview of tasks you create and
						manipulate with.
					</Paragraph>
				</Card>

				<Card url="https://better-timer.vercel.app/">
					<Img src={better_timer} />
					<h2>Better Timer</h2>
					<Paragraph>
						Easily track time spent on your tasks using Better Timer!
					</Paragraph>
				</Card>
			</div>
		</section>
	);
}
