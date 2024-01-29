export default function Card({ children }) {
	return (
		<div className="my-10 flex flex-1 basis-1/3 xl:basis-1/4 flex-col items-center justify-start rounded-xl p-10 text-center shadow-lg dark:bg-gray-200 lg:hover:shadow-xl lg:transition-all">
			{children}
		</div>
	);
}
