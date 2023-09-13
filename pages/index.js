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

      <main className="flex flex-col items-center bg-gray-50 px-10 dark:bg-gray-800 md:px-20 lg:px-20">
        <section className="mb-20 w-full md:mb-0">
          <nav className="flex justify-between py-10 2xl:py-5">
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
                  href="https://europa.eu/europass/eportfolio/screen/share/8299ea82-b2c2-4319-9382-3bd407d19a1d?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="my-5 w-full max-w-7xl">
          <div className="text-center md:p-10">
            <h2 className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text py-2 text-4xl font-medium text-transparent md:text-5xl 2xl:text-6xl 3xl:text-6xl">
              Jakov Knezevic
            </h2>
            <h3 className="py-2 text-2xl dark:text-gray-100 md:text-2xl 2xl:text-3xl">
              Frontend developer
            </h3>
            <p className="mx-auto max-w-lg py-5 text-base leading-8 text-gray-800 dark:text-gray-300 md:text-lg 2xl:text-xl">
              I love coding and creating new solutions as I get better at it day
              by day!
            </p>
          </div>
          <div className="flex justify-center gap-5 text-5xl text-gray-600 dark:text-gray-300 2xl:my-10 2xl:text-6xl 3xl:my-14">
            <a
              href="https://github.com/jknezevic1712/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jknezevic1712/"
              target="_blank"
              rel="noreferrer"
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
          <div className="relative mx-auto mt-32 h-52 w-52 overflow-hidden rounded-full shadow-2xl filter md:mb-0 md:mt-16 md:h-80 md:w-80 2xl:mt-28">
            <Image src={avatar} alt="" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="mb-5 mt-10 w-full max-w-7xl">
          <div className="mb-20">
            <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
              Work experience
            </h3>
            <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Since the beginning of my journey as a frontend web and software
              developer, I&apos;ve done remote and on site work for{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all">
                <a href="https://www.libelle.com/">Ovis software</a>
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all">
                <a href="https://www.ovis-software.com/">Libelle IT Group</a>
              </span>{" "}
              while also working on personal development and side projects that
              continuously keep advancing me to the next levels.
            </p>
          </div>

          <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:flex-nowrap xl:gap-10">
            <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="pb-4 pt-8 text-lg font-medium 2xl:text-2xl">
                Tools I love using
              </h3>
              <p className="max-w-sm py-2 2xl:text-lg">
                Building web applications, websites and software has encouraged
                me to explore and use different tools to achieve the required
                needs and goals which in turn has made me realize which tools I
                like to use the most and here are some of my favorites.
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
                  <p className="py-1 text-gray-800">Next.js</p>
                  <p className="py-1 text-gray-800">Redux/NgRx</p>
                  <p className="py-1 text-gray-800">Tailwind CSS</p>
                </div>
              </div>
            </div>

            <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="pb-4 pt-8 text-lg font-medium 2xl:text-2xl">
                Planning and designing
              </h3>
              <p className="max-w-sm py-2 2xl:text-lg">
                Planning and designing software solutions is something I love
                and enjoy because every time I come up with a new solution, I
                learn something new along the way.
              </p>
            </div>

            <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
              <Image src={consulting} alt="" width={100} height={100} />
              <h3 className="pb-4 pt-8 text-lg font-medium 2xl:text-2xl">
                Teamwork
              </h3>
              <p className="max-w-sm py-2 2xl:text-lg">
                I believe in teamwork and mutual support so that each of us
                could become a better version of ourselves both as a person and
                as a developer every day!
              </p>
            </div>
          </div>
        </section>

        <section className="my-5 w-full max-w-7xl">
          <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
            About me
          </h3>
          <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
            Born in 1998 in Pakrac, Croatia. Graduated at Technical school in
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
            Personality wise, I am interested in programming, music and
            travelling. I also believe in team work and communication as they
            are, in my opinion, crucial to achieving{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              success
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              progress
            </span>
            . In my free time, I try to explore new patterns/ways of building
            all kinds of different features to stay up to date with the latest
            additions to the popular libraries and packages I use while learning
            new things and gaining more experience as well.
          </p>
          <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
            Additionally, I strive to become part of a team that pushes each
            other every day to{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              become better
            </span>{" "}
            by{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              learning from our mistakes
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              working together to solve them
            </span>{" "}
            so that everyone can hopefully learn something along the way!
          </p>
        </section>

        <section className="mt-5 w-full max-w-7xl">
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
        </section>
      </main>
    </div>
  );
}
