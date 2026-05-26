import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

const AnchorVariants = {
	DEFAULT: '',
	CV: 'ml-8 rounded-md text-highlight px-4 py-2 text-white lg:hover:transition-all 3xl:text-lg',
	BADGE: 'border rounded-2xl p-1 text-2xl',
} as const;

type AnchorVariant = keyof typeof AnchorVariants;

interface AnchorProps {
	children: ReactNode;
	href: string;
	variant?: AnchorVariant;
	className?: HTMLAttributes<any>['className'];
	underline?: boolean;
}

export default function Anchor({
	children,
	href,
	variant = 'DEFAULT',
	className = '',
	underline = false,
}: AnchorProps) {
	const baseClasses = `${AnchorVariants[variant]} ${className}`;
	const extraClasses = underline ? ' hover:underline underline-offset-4' : '';

	return (
		<Link
			href={href}
			target="_blank"
			rel="noreferrer"
			className={baseClasses + extraClasses}
		>
			{children}
		</Link>
	);
}
