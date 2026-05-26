import { ReactNode } from 'react';

interface SectionProps {
	title: string;
	children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
				{title}
			</h3>

			{children}
		</section>
	);
}
