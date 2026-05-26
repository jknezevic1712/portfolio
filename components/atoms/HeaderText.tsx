import Link from 'next/link';
import { ReactNode } from 'react';

interface HeaderTextProps {
	children: ReactNode;
	asLink?: boolean;
	url?: string;
}

export default function HeaderText({
	children,
	asLink = false,
	url = '',
}: HeaderTextProps) {
	const HeaderTextComponent = () => (
		<h2 className="font-futura text-start text-xl font-bold md:text-3xl 2xl:text-3xl">
			{children}
		</h2>
	);

	if (asLink) {
		return (
			<Link
				href={url}
				target="_blank"
				rel="noreferrer"
				className="hover:underline"
			>
				<HeaderTextComponent />
			</Link>
		);
	}

	return <HeaderTextComponent />;
}
