import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

const LinkClassTypes = {
	DEFAULT: '',
	CV: 'ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all 3xl:text-lg',
	BADGE: 'border rounded-2xl p-1 text-2xl',
} as const;

type AnchorType = keyof typeof LinkClassTypes;

interface AnchorProps {
	children: ReactNode;
	href: string;
	type?: AnchorType;
	className?: HTMLAttributes<any>['className'];
}

export default function Anchor({
	children,
	href,
	type = 'DEFAULT',
	className = '',
}: AnchorProps) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noreferrer"
			className={LinkClassTypes[type] + className}
		>
			{children}
		</Link>
	);
}
