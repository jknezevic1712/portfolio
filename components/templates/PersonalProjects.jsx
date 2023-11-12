import plahutica from '../../public/plahutica.png';
import crwn_clothing from '../../public/crwn-clothing.svg';
import recipe_o_mat from '../../public/recipe-o-mat.png';
import tmb from '../../public/tmb.png';
import better_timer from '../../public/better_timer.png';

import Anchor from '../atoms/Anchor';
import Paragraph from '../atoms/Paragraph';
import Img from '../atoms/Img';
import Card from '../molecules/Card';

export default function PersonalProjects() {
  return (
    <section className="mt-5 w-full max-w-7xl">
      <h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
        Personal projects
      </h3>
      <div className="gap-10 lg:flex lg:flex-wrap lg:justify-center lg:gap-5 xl:gap-10">
        <Card>
          <Img src={plahutica} />
          <Anchor
            href={'https://plahutica.vercel.app/'}
            type="PROJECT"
          >
            Plahutica
          </Anchor>
          <Paragraph>
            Travelling on a budget guide here to help you out with useful ideas
            or advices for your journey.
          </Paragraph>
        </Card>

        <Card>
          <Img src={recipe_o_mat} />
          <Anchor
            href={'https://recipe-o-mat.web.app/'}
            type="PROJECT"
          >
            Recipe-O-Mat
          </Anchor>
          <Paragraph>
            Check out some amazing recipes or share yours with others!
          </Paragraph>
        </Card>

        <Card>
          <Img src={crwn_clothing} />
          <Anchor
            href={'https://crwn-clothing-jk.vercel.app/'}
            type="PROJECT"
          >
            Crown Clothing
          </Anchor>
          <Paragraph>Web shop with various products.</Paragraph>
        </Card>

        <Card>
          <Img src={tmb} />
          <Anchor
            href={'https://tmb-jk.vercel.app/'}
            type="PROJECT"
          >
            Task Management Board
          </Anchor>
          <Paragraph>
            Application providing you with an overview of tasks you create and
            manipulate with.
          </Paragraph>
        </Card>

        <Card>
          <Img src={better_timer} />
          <Anchor
            href={'https://better-timer.vercel.app/'}
            type="PROJECT"
          >
            Better Timer
          </Anchor>
          <Paragraph>
            Easily track time spent on your tasks using Better Timer!
          </Paragraph>
        </Card>
      </div>
    </section>
  );
}
