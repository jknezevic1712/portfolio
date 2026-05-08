import Image, { StaticImageData } from 'next/image';

interface ImgProps {
	src: StaticImageData;
	type?: 'DEFAULT' | 'HERO' | 'PROJECT';
}

export default function Img({ src, type = 'DEFAULT' }: ImgProps) {
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
		/>
	);
}
