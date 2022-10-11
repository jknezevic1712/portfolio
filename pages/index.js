import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import avatar from "../public/avatar.jpeg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
// import web1 from "../public/web1.png";
// import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";

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
          <nav className="py-10 mb-20 flex justify-between 2xl:py-5">
            <h1 className="text-base font-burtons dark:text-gray-100 md:text-xl 3xl:text-2xl">
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
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 lg:hover:transition-all lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 3xl:text-lg"
                  href="https://europa.eu/europass/eportfolio/screen/share/f9b150ca-77c8-4368-93ad-e27f1944eeb9?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center md:p-10">
            <h2 className="text-4xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-medium md:text-5xl 2xl:text-6xl 3xl:text-6xl">
              Jakov Knezevic
            </h2>
            <h3 className="text-2xl py-2 dark:text-gray-100 md:text-2xl 2xl:text-3xl">
              Frontend developer
            </h3>
            <p className="text-base py-5 leading-8 max-w-lg mx-auto text-gray-800 dark:text-gray-300 md:text-lg 2xl:text-xl">
              Creating new software and websites while also refurbishing and
              upgrading the old ones. Feel free to get in contact for more
              information and a possible collaboration!
            </p>
          </div>
          <div className="text-5xl flex justify-center my-20 text-gray-600 dark:text-gray-300 2xl:text-6xl 2xl:my-10 3xl:my-14">
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
          <div className="relative mx-auto rounded-full w-52 h-52 mt-32 overflow-hidden filter shadow-2xl md:mb-0 md:mt-20 md:h-96 md:w-96 lg:mt-32">
            <Image src={avatar} alt="" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="mb-20">
            <h3 className="text-3xl mb-5 text-center dark:text-gray-100 md:text-left 3xl:text-4xl">
              Services I offer
            </h3>
            <p className="text-base py-2 leading-8 text-center text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Since the beginning of my journey as a frontend web and software
              developer, I&apos;ve done remote and on site work for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 lg:hover:transition-all lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600">
                <a href="https://www.libelle.com/">Libelle IT Group</a>
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 lg:hover:transition-all lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600">
                <a href="https://www.ovis-software.com/">Ovis software</a>
              </span>{" "}
              while also working on personal development and side projects that
              continuously keep advancing me to the next levels.
            </p>
            <p className="text-base py-2 leading-8 text-center text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              I offer from a wide range of services, including web and software
              development.
            </p>
          </div>

          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 2xl:text-2xl">
                Modern websites and software
              </h3>
              <p className="py-2 2xl:text-lg">
                Creating web apps and software using best coding practices and
                elegant designs suited for your needs so that your website or
                software looks modern and up-to-date.
              </p>
              <h4 className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 2xl:text-xl">
                Most used tools
              </h4>
              <div className="flex justify-center items-center 2xl:text-lg">
                <div className="mr-5 md:mr-10">
                  <p className="text-gray-800 py-1">ReactJS</p>
                  <p className="text-gray-800 py-1">Typescript</p>
                  <p className="text-gray-800 py-1">jQuery</p>
                </div>
                <div>
                  <p className="text-gray-800 py-1">Tailwind CSS</p>
                  <p className="text-gray-800 py-1">Styled Components</p>
                  <p className="text-gray-800 py-1">Material UI</p>
                </div>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 2xl:text-2xl">
                Refurbishing old designs and software
              </h3>
              <p className="py-2 2xl:text-lg">
                Updating your websites and software both visually and under the
                hood so that it works better with higher performance while
                looking modern and beautiful once more.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-50">
              <Image src={consulting} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 2xl:text-2xl">
                Collaborations
              </h3>
              <p className="py-2 2xl:text-lg">
                I believe in collaborations on all sorts of projects in order
                for mutual benefits and advancement. Writing this, feel free to
                contact me via options listed on the top of the page.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="py-20">
            <h3 className="text-3xl mb-5 text-center dark:text-gray-100 md:text-left 3xl:text-4xl">
              Portfolio
            </h3>
            <p className="text-base py-2 leading-8 text-center text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Born in 1998 in Pakrac, Croatia. Graduated at Tehnička škola
              Daruvar becoming a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                computer technician
              </span>
              . After that, I enrolled at the Faculty of Organization and
              Informatics in Varaždin, where I obtained degree of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                Bachelors in Informatics
              </span>{" "}
              and I am currently pursuing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                Master of Informatics
              </span>{" "}
              degree.
            </p>
            <p className="text-base py-2 leading-8 text-center text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
              Personality wise, I am interested in programming and music. I also
              believe in team work and communication as they are, in my opinion,
              crucial to achieving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                success
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                progress
              </span>
              .
            </p>
          </div>
          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
