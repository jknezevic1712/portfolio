import { BsFillMoonStarsFill } from 'react-icons/bs';

import Anchor from '../atoms/Anchor';

export default function Header({ setDarkMode }) {
	return (
		<section className="mb-20 w-full md:mb-0">
			<nav className="flex justify-between py-10 2xl:py-5">
				<h1 className="font-burtons text-base dark:text-gray-100 md:text-xl 3xl:text-2xl">
					Jakov Knezevic
				</h1>
				<ul className="flex items-center">
					<li>
						<BsFillMoonStarsFill
							className="cursor-pointer text-2xl dark:text-gray-100 3xl:text-3xl"
							onClick={() => setDarkMode((v) => !v)}
						/>
					</li>
					<li>
						<Anchor
							href={
								'https://europa.eu/europass/eportfolio/screen/share/0ddbfb19-7efe-450f-828d-45577e217a12?lang=en'
							}
							type="CV"
						>
							Resume
						</Anchor>
					</li>
				</ul>
			</nav>
		</section>
	);
}
