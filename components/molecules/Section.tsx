import { ReactNode } from 'react';

interface CardProps {
	title: string;
	children: ReactNode;
}

export default function Section({ title, children }: CardProps) {
	return (
		<section className="mt-5 w-full max-w-7xl">
			<h3 className="mb-5 text-center text-3xl md:text-left 3xl:text-4xl">
				{title}
			</h3>

			{children}
		</section>
	);
}
