import { ImageResponse } from 'next/og';
import { RESUME_DATA } from '@/lib/data/RESUME_DATA';

export const runtime = 'edge';

export const alt = RESUME_DATA.metadata.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '80px',
					background:
						'linear-gradient(135deg, #EAE3D9 0%, #C3B1A7 50%, #B1A095 100%)',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					<span
						style={{
							fontSize: 72,
							fontWeight: 700,
							color: '#1a1a1a',
						}}
					>
						{RESUME_DATA.name}
					</span>
					<span
						style={{
							fontSize: 36,
							fontWeight: 500,
							color: '#4a4a4a',
						}}
					>
						{RESUME_DATA.role}
					</span>
					<span
						style={{
							fontSize: 24,
							fontWeight: 400,
							color: '#6a6a6a',
							maxWidth: '800px',
							lineHeight: 1.4,
						}}
					>
						{RESUME_DATA.about}
					</span>
				</div>
				<img
					src={RESUME_DATA.avatarUrl}
					alt=""
					width={280}
					height={280}
					style={{
						borderRadius: '50%',
						border: '4px solid #B85C3A',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						bottom: '80px',
						left: '80px',
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
					}}
				>
					<div
						style={{
							width: '16px',
							height: '16px',
							borderRadius: '50%',
							background: '#B85C3A',
						}}
					/>
					<span
						style={{
							fontSize: 20,
							color: '#6a6a6a',
						}}
					>
						{RESUME_DATA.metadata.baseUrl.replace('https://', '')}
					</span>
				</div>
			</div>
		),
		{ ...size },
	);
}
