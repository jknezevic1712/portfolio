import Paragraph from '../atoms/Paragraph';

export default function About() {
	return (
		<section className="my-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl dark:text-gray-100 md:text-left 3xl:text-4xl">
				About
			</h3>

			<Paragraph type="CONTENT">
				Software Engineer with 5+ years shipping web applications for enterprise
				and startups. Building scalable frontends, modernizing legacy codebases,
				and owning features from concept to deployment.
			</Paragraph>
		</section>
	);
}
