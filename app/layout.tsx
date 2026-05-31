import type { Metadata } from 'next';
import { RESUME_DATA } from '@/lib/data/RESUME_DATA';
import '../styles/globals.css';

const { metadata: meta, name } = RESUME_DATA;

export const metadata: Metadata = {
	metadataBase: new URL(meta.baseUrl),
	title: meta.title,
	description: meta.description,
	applicationName: name,
	authors: [{ name }],
	openGraph: {
		siteName: name,
		title: meta.title,
		description: meta.description,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: meta.title,
		description: meta.description,
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
