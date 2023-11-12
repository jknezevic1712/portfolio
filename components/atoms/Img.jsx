import Image from 'next/image';

export default function Img({ src, type = 'DEFAULT' }) {
  if (type === 'HERO') {
    return (
      <Image
        src={src}
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={100}
      height={100}
    />
  );
}
