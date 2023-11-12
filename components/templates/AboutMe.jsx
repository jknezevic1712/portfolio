import Paragraph from '../atoms/Paragraph';

export default function AboutMe() {
  return (
    <section className="my-5 w-full max-w-7xl">
      <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
        About me
      </h3>
      <Paragraph type="CONTENT">
        Born in 1998 in Pakrac, Croatia. Graduated at Technical school in
        Daruvar becoming a{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          computer technician
        </span>
        . After that, I enrolled at the Faculty of Organization and Informatics
        in Varaždin, where I obtained degree of{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          Bachelors in Informatics
        </span>
        .
      </Paragraph>

      <Paragraph type="CONTENT">
        Personality wise, I am interested in programming, music and travelling.
        I also believe in team work and communication as they are, in my
        opinion, crucial to achieving{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          success
        </span>{' '}
        and{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          progress
        </span>
        . In my free time, I try to explore new patterns/ways of building all
        kinds of different features to stay up to date with the latest additions
        to the popular libraries and packages I use while learning new things
        and gaining more experience as well.
      </Paragraph>

      <Paragraph type="CONTENT">
        Additionally, I strive to become part of a team that pushes each other
        every day to{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          become better
        </span>{' '}
        by{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          learning from our mistakes
        </span>{' '}
        and{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          working together to solve them
        </span>{' '}
        so that everyone can hopefully learn something along the way!
      </Paragraph>
    </section>
  );
}
