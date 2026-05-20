import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface WideCardProps extends DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	children: ReactNode;
	className?: string;
}

export default function WideCard({
	children,
	className = '',
	...props
}: WideCardProps) {
	return (
		<div
			className={`gap-4 flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200 lg:hover:-translate-y-2 lg:transition-all lg:duration-500 group my-5 md:my-10 ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}
