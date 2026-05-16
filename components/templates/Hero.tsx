import { CiGlobe } from 'react-icons/ci';

import avatar from '../../public/avatar.jpeg';

import Paragraph from '../atoms/Paragraph';
import Img from '../atoms/Img';
import Anchor from '../atoms/Anchor';
import { ICON_MAP, RESUME_DATA } from '@/lib/data/RESUME_DATA';

export default function Hero() {
	return (
		<section className="w-full flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
			<div className="flex flex-col">
				<div className="text-center lg:text-start">
					<div className="flex flex-col gap-2">
						<h2 className="bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text text-4xl font-medium text-transparent md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
							{RESUME_DATA.name}
						</h2>
						<Anchor
							href={RESUME_DATA.locationLink}
							className="flex gap-1 items-center justify-center text-xs 2xl:text-sm 3xl:text-lg text-gray-800 dark:text-gray-300 lg:justify-start"
							underline
						>
							<CiGlobe />
							<span>{RESUME_DATA.location}</span>
						</Anchor>
					</div>
					<Paragraph type="LARGE">{RESUME_DATA.about}</Paragraph>
				</div>

				<div className="flex justify-center gap-4 text-gray-600 dark:text-gray-300 lg:justify-start lg:gap-2">
					{RESUME_DATA.contact.social.map((contact) => {
						const IconComponent = ICON_MAP[contact.icon];

						return (
							<Anchor
								key={contact.url}
								variant={'BADGE'}
								href={contact.url}
							>
								<IconComponent />
							</Anchor>
						);
					})}
				</div>
			</div>

			<div className="relative mx-auto h-52 w-52 overflow-hidden rounded-3xl shadow-2xl filter lg:h-44 lg:w-44">
				<Img
					src={RESUME_DATA.avatarUrl}
					type="HERO"
					fill
				/>
			</div>
		</section>
	);
}
