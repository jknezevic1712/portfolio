import { ReactNode } from 'react';

interface HeaderTextProps {
	children: ReactNode;
}

export default function HeaderText({ children }: HeaderTextProps) {
	return (
		<h2 className="font-burtons text-lg text-gray-950 md:text-3xl 2xl:text-4xl">
			{children}
		</h2>
	);
}
