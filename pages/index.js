import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import avatar from "../public/avatar.jpeg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import plahutica from "../public/plahutica.png";
import crwn_clothing from "../public/crwn-clothing.svg";
import recipe_o_mat from "../public/recipe-o-mat.png";

// Barlow font for headings
// Roboto Slab, Roboto or Open Sans font for body

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jakov Knezevic Portfolio</title>
        <meta name="description" content="Jakov Knezevic Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 px-10 dark:bg-gray-800 md:px-20 lg:px-20">
        <section className="min-h-screen">
          <nav className="mb-20 flex justify-between py-10 2xl:py-5">
            <h1 className="font-burtons text-base dark:text-gray-100 md:text-xl 3xl:text-2xl">
              Jakov Knezevic
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-gray-100 3xl:text-3xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all 3xl:text-lg"
                  href="https://europa.eu/europass/eportfolio/screen/share/f6f916c9-65b5-48cc-82aa-5263f1f63fbe?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center md:p-10">
            <h2 className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text py-2 text-4xl font-medium text-transparent md:text-5xl 2xl:text-6xl 3xl:text-6xl">
              Jakov Knezevic
            </h2>
            <h3 className="py-2 text-2xl dark:text-gray-100 md:text-2xl 2xl:text-3xl">
              Frontend developer
            </h3>
            <p className="mx-auto max-w-lg py-5 text-base leading-8 text-gray-800 dark:text-gray-300 md:text-lg 2xl:text-xl">
              Creating new software and websites while also refurbishing and
              upgrading the old ones. Feel free to get in contact for more
              information and a possible collaboration!
            </p>
          </div>
          <div className="my-20 flex justify-center text-5xl text-gray-600 dark:text-gray-300 2xl:my-10 2xl:text-6xl 3xl:my-14">
            <a
              href="https://github.com/jknezevic1712/"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jknezevic1712/"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="mailto:knezevic.jakov@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto mt-32 h-52 w-52 overflow-hidden rounded-full shadow-2xl filter md:mb-0 md:mt-20 md:h-96 md:w-96 lg:mt-32">
            <Image src={avatar} alt="" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="mb-20">
            <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
              Services I offer
            </h3>
            <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Since the beginning of my journey as a frontend web and software
              developer, I&apos;ve done remote and on site work for{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all">
                <a href="https://www.libelle.com/">Libelle IT Group</a>
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all">
                <a href="https://www.ovis-software.com/">Ovis software</a>
              </span>{" "}
              while also working on personal development and side projects that
              continuously keep advancing me to the next levels.
            </p>
            <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              I offer from a wide range of services, including web and software
              development.
            </p>
          </div>

          <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:flex-nowrap xl:gap-10">
            <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="pb-2 pt-8 text-lg font-medium 2xl:text-2xl">
                Modern websites and software
              </h3>
              <p className="max-w-sm py-2 2xl:text-lg">
                Creating web apps and software using best coding practices and
                elegant designs suited for your needs so that your website or
                software looks modern and up-to-date.
              </p>
              <h4 className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text py-4 text-transparent 2xl:text-xl">
                Most used tools
              </h4>
              <div className="flex items-center justify-center 2xl:text-lg">
                <div className="mr-5 md:mr-10">
                  <p className="py-1 text-gray-800">React</p>
                  <p className="py-1 text-gray-800">Angular</p>
                  <p className="py-1 text-gray-800">Typescript</p>
                </div>
                <div>
                  <p className="py-1 text-gray-800">Tailwind CSS</p>
                  <p className="py-1 text-gray-800">Styled Components</p>
                  <p className="py-1 text-gray-800">Material UI</p>
                </div>
              </div>
            </div>

            <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="pb-2 pt-8 text-lg font-medium 2xl:text-2xl">
                Refurbishing old designs and software
              </h3>
              <p className="max-w-sm py-2 2xl:text-lg">
                Updating your websites and software both visually and under the
                hood so that it works better with higher performance while
                looking modern and beautiful once more.
              </p>
            </div>
            <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
              <Image src={consulting} alt="" width={100} height={100} />
              <h3 className="pb-2 pt-8 text-lg font-medium 2xl:text-2xl">
                Collaborations
              </h3>
              <p className="max-w-sm py-2 2xl:text-lg">
                I believe in collaborations on all sorts of projects in order
                for mutual benefits and advancement. Writing this, feel free to
                contact me via options listed on the top of the page.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="py-20">
            <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
              Portfolio
            </h3>
            <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Born in 1998 in Pakrac, Croatia. Graduated at Tehnička škola
              Daruvar becoming a{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                computer technician
              </span>
              . After that, I enrolled at the Faculty of Organization and
              Informatics in Varaždin, where I obtained degree of{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Bachelors in Informatics
              </span>
              .
            </p>
            <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Personality wise, I am interested in programming and music. I also
              believe in team work and communication as they are, in my opinion,
              crucial to achieving{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                success
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                progress
              </span>
              .
            </p>
          </div>
        </section>

        <section>
          <div className="py-20">
            <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
              Personal projects
            </h3>
            <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:flex-nowrap xl:gap-10">
              <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
                <Image src={plahutica} alt="" width={100} height={100} />
                <a
                  href="https://plahutica.vercel.app/"
                  target="_blank"
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text px-4 py-2 pb-2 pt-8 text-lg font-medium text-transparent lg:hover:opacity-75 lg:hover:transition-all 2xl:text-2xl"
                >
                  Plahutica
                </a>
                <p className="max-w-sm py-2 2xl:text-lg">
                  Travelling on a budget guide here to help you out with useful
                  ideas or advices for your journey.
                </p>
              </div>

              <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
                <Image src={recipe_o_mat} alt="" width={100} height={100} />
                <a
                  href="https://recipe-o-mat.web.app/"
                  target="_blank"
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text px-4 py-2 pb-2 pt-8 text-lg font-medium text-transparent lg:hover:opacity-75 lg:hover:transition-all 2xl:text-2xl"
                >
                  Recipe-O-Mat
                </a>
                <p className="max-w-sm py-2 2xl:text-lg">
                  Check out some amazing recipes or share yours with others!
                </p>
              </div>

              <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
                <Image src={crwn_clothing} alt="" width={100} height={100} />
                <a
                  href="https://crwn-clothing-jk.vercel.app/"
                  target="_blank"
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text px-4 py-2 pb-2 pt-8 text-lg font-medium text-transparent lg:hover:opacity-75 lg:hover:transition-all 2xl:text-2xl"
                >
                  Crown Clothing
                </a>
                <p className="max-w-sm py-2 2xl:text-lg">
                  Web shop with various products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
