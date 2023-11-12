import Image from 'next/image';

import plahutica from '../../public/plahutica.png';
import crwn_clothing from '../../public/crwn-clothing.svg';
import recipe_o_mat from '../../public/recipe-o-mat.png';

export default function PersonalProjects() {
  return (
    <section className="mt-5 w-full max-w-7xl">
      <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
        Personal projects
      </h3>
      <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:flex-nowrap xl:gap-10">
        <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
          <Image
            src={plahutica}
            alt=""
            width={100}
            height={100}
          />
          <a
            href="https://plahutica.vercel.app/"
            target="_blank"
            className="rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text px-4 py-2 pb-2 pt-8 text-lg font-medium text-transparent lg:hover:opacity-75 lg:hover:transition-all 2xl:text-2xl"
          >
            Plahutica
          </a>
          <p className="max-w-sm py-2 2xl:text-lg">
            Travelling on a budget guide here to help you out with useful ideas
            or advices for your journey.
          </p>
        </div>

        <div className="my-10 flex flex-1 basis-1/3 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200">
          <Image
            src={recipe_o_mat}
            alt=""
            width={100}
            height={100}
          />
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
          <Image
            src={crwn_clothing}
            alt=""
            width={100}
            height={100}
          />
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
  );
}
