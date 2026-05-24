'use client';

import { useState } from 'react';

import Hero from '../components/templates/Hero';
import WorkExperience from '../components/templates/WorkExperience';
import About from '../components/templates/About';
import PersonalProjects from '../components/templates/PersonalProjects';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<main className="flex flex-col items-center bg-gray-50 px-3 pt-16 dark:bg-gray-800">
				<div className="flex flex-col items-center gap-12 max-w-3xl">
					<Hero />
					<About />
					<WorkExperience />
					<PersonalProjects />
				</div>

				<BsFillMoonStarsFill
					className="cursor-pointer text-2xl dark:text-gray-100 fixed bottom-12 right-12 3xl:text-3xl"
					onClick={() => setDarkMode((v) => !v)}
				/>
			</main>
		</div>
	);
}
