import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { CiGlobe } from 'react-icons/ci';

import avatar from '../../public/avatar.jpeg';

import Paragraph from '../atoms/Paragraph';
import Img from '../atoms/Img';
import Anchor from '../atoms/Anchor';

export default function Hero() {
	return (
		<section className="w-full flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
			<div className="flex flex-col">
				<div className="text-center">
					<div className="flex flex-col gap-2">
						<h2 className="bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text text-4xl font-medium text-transparent md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
							Jakov Knezevic
						</h2>
						<Anchor
							href={'https://www.google.com/maps/place/Zagreb'}
							className="flex gap-1 items-center justify-center text-xs 2xl:text-sm 3xl:text-lg text-gray-800 dark:text-gray-300"
						>
							<CiGlobe />
							<span>Zagreb, Croatia, CET</span>
						</Anchor>
					</div>
					<Paragraph type="LARGE">
						Software Engineer crafting web experiences from concept to
						production.
					</Paragraph>
				</div>

				<div className="flex justify-center gap-5 text-gray-600 dark:text-gray-300">
					<Anchor
						type={'BADGE'}
						href={'https://github.com/jknezevic1712/'}
					>
						<AiFillGithub />
					</Anchor>
					<Anchor
						type={'BADGE'}
						href={'https://www.linkedin.com/in/jknezevic1712/'}
					>
						<AiFillLinkedin />
					</Anchor>
					<Anchor
						type={'BADGE'}
						href={'mailto:knezevic.jakov@gmail.com'}
					>
						<AiFillMail />
					</Anchor>
				</div>
			</div>

			<div className="relative mx-auto h-52 w-52 overflow-hidden rounded-3xl shadow-2xl filter lg:h-44 lg:w-44">
				<Img
					src={avatar}
					type="HERO"
				/>
			</div>
		</section>
	);
}
