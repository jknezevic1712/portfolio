import Image from 'next/image';

export default function Img({ src, type = 'DEFAULT' }) {
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
			layout="fill"
			objectFit="cover"
			priority={type === 'HERO' ? true : false}
		/>
	);
}
