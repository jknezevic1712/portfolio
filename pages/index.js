import { useState } from 'react';
import Head from 'next/head';

import Header from '../components/templates/Header';
import Hero from '../components/templates/Hero';
import WorkExperience from '../components/templates/WorkExperience';
import AboutMe from '../components/templates/AboutMe';
import PersonalProjects from '../components/templates/PersonalProjects';

// Barlow font for headings
// Roboto Slab, Roboto or Open Sans font for body

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Jakov Knezevic Portfolio</title>
        <meta
          name="description"
          content="Jakov Knezevic Portfolio"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className="flex flex-col items-center bg-gray-50 px-10 dark:bg-gray-800 md:px-20 lg:px-20">
        <Header setDarkMode={setDarkMode} />
        <Hero />
        <WorkExperience />
        <AboutMe />
        <PersonalProjects />
      </main>
    </div>
  );
}
