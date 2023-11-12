import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import avatar from '../../public/avatar.jpeg';

import Paragraph from '../atoms/Paragraph';
import Img from '../atoms/Img';
import Anchor from '../atoms/Anchor';

export default function Hero() {
  return (
    <section className="my-5 w-full max-w-7xl">
      <div className="text-center md:p-10">
        <h2 className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text py-2 text-4xl font-medium text-transparent md:text-5xl 2xl:text-6xl 3xl:text-6xl">
          Jakov Knezevic
        </h2>
        <h3 className="py-2 text-2xl dark:text-gray-100 md:text-2xl 2xl:text-3xl">
          Software engineer
        </h3>
        <Paragraph type="LARGE">
          I love coding and creating new solutions as I get better at it day by
          day!
        </Paragraph>
      </div>
      <div className="flex justify-center gap-5 text-5xl text-gray-600 dark:text-gray-300 2xl:my-10 2xl:text-6xl 3xl:my-14">
        <Anchor href={'https://github.com/jknezevic1712/'}>
          <AiFillGithub />
        </Anchor>
        <Anchor href={'https://www.linkedin.com/in/jknezevic1712/'}>
          <AiFillLinkedin />
        </Anchor>
        <Anchor href={'mailto:knezevic.jakov@gmail.com'}>
          <AiFillMail />
        </Anchor>
      </div>
      <div className="relative mx-auto mt-32 h-52 w-52 overflow-hidden rounded-full shadow-2xl filter md:mb-0 md:mt-16 md:h-80 md:w-80 2xl:mt-28">
        <Img
          src={avatar}
          type="HERO"
        />
      </div>
    </section>
  );
}
