import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import Paragraph from '../atoms/Paragraph';
import Section from '../molecules/Section';

export default function About() {
	return (
		<Section title="About">
			<div className="w-full py-10 px-4 my-5 md:my-10">
				<Paragraph type="CONTENT">{RESUME_DATA.summary}</Paragraph>
			</div>
		</Section>
	);
}
