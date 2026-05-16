import Image, { StaticImageData } from 'next/image';

interface ImgProps {
	src: string | StaticImageData;
	type?: 'DEFAULT' | 'HERO' | 'PROJECT';
	fill?: boolean;
}

export default function Img({ src, type = 'DEFAULT', fill = false }: ImgProps) {
	if (type === 'DEFAULT') {
		return (
			<Image
				src={src}
				alt=""
				width={100}
				height={100}
			/>
		);
	}

	return (
		<Image
			src={src}
			alt=""
			priority={type === 'HERO'}
			fill={fill}
		/>
	);
}
