import { BsFillMoonStarsFill } from 'react-icons/bs';

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
            <a
              className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all 3xl:text-lg"
              href="https://europa.eu/europass/eportfolio/screen/share/a284191a-e6ed-43c4-9c50-90a0fb831366?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
