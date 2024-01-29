export default function WideCard({ children, url }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			// className="my-10 gap-4 flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200 lg:hover:shadow-xl lg:hover:skew-x-1 lg:hover:-skew-y-1 lg:transition-all lg:duration-200"
			className="my-10 gap-4 flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200 lg:hover:shadow-xl lg:transition-all lg:duration-500 group lg:hover:gap-8"
		>
			{children}
		</a>
	);
}
