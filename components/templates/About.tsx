import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import Paragraph from '../atoms/Paragraph';

export default function About() {
	return (
		<section className="my-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
				About
			</h3>

			<Paragraph type="CONTENT">{RESUME_DATA.summary}</Paragraph>
		</section>
	);
}
