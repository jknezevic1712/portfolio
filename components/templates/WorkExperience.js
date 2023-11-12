import Image from 'next/image';

import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';

export default function WorkExperience() {
  return (
    <section className="mb-5 mt-10 w-full max-w-7xl">
      <div className="mb-20">
        <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
          Work experience
        </h3>
        <p className="py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl">
          Since the beginning of my journey as a frontend web and software
          developer, I&apos;ve done remote and on site work for{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all">
            <a href="https://www.libelle.com/">Ovis software</a>
          </span>{' '}
          and{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all">
            <a href="https://www.ovis-software.com/">Libelle IT Group</a>
          </span>{' '}
          while also working on personal development and side projects that
          continuously keep advancing me to the next levels.
        </p>
      </div>

      <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:flex-nowrap xl:gap-10">
        <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
          <Image
            src={code}
            alt=""
            width={100}
            height={100}
          />
          <h3 className="pb-4 pt-8 text-lg font-medium 2xl:text-2xl">
            Tools I love using
          </h3>
          <p className="max-w-sm py-2 2xl:text-lg">
            Building web applications, websites and software has encouraged me
            to explore and use different tools to achieve the required needs and
            goals which in turn has made me realize which tools I like to use
            the most and here are some of my favorites.
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
          <Image
            src={design}
            alt=""
            width={100}
            height={100}
          />
          <h3 className="pb-4 pt-8 text-lg font-medium 2xl:text-2xl">
            Planning and designing
          </h3>
          <p className="max-w-sm py-2 2xl:text-lg">
            Planning and designing software solutions is something I love and
            enjoy because every time I come up with a new solution, I learn
            something new along the way.
          </p>
        </div>

        <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
          <Image
            src={consulting}
            alt=""
            width={100}
            height={100}
          />
          <h3 className="pb-4 pt-8 text-lg font-medium 2xl:text-2xl">
            Teamwork
          </h3>
          <p className="max-w-sm py-2 2xl:text-lg">
            I believe in teamwork and mutual support so that each of us could
            become a better version of ourselves both as a person and as a
            developer every day!
          </p>
        </div>
      </div>
    </section>
  );
}
