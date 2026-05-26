import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const ICON_MAP = {
	github: AiFillGithub,
	linkedin: AiFillLinkedin,
	email: AiFillMail,
} as const;

export const RESUME_DATA = {
	name: 'Jakov Knežević',
	initials: 'JK',
	location: 'Zagreb, Croatia, CET',
	locationLink: 'https://www.google.com/maps/place/Zagreb',
	about:
		'Software Engineer crafting web experiences from concept to production.',
	summary:
		'Software Engineer with 5+ years shipping web applications for enterprise and startups. Building scalable frontends, modernizing legacy codebases, and owning features from concept to deployment.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/190621376?v=4',
	contact: {
		email: 'knezevic.jakov@gmail.com',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/jknezevic1712',
				icon: 'github' satisfies keyof typeof ICON_MAP,
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/jknezevic1712/',
				icon: 'linkedin' satisfies keyof typeof ICON_MAP,
			},
			{
				name: 'E-Mail',
				url: 'mailto:knezevic.jakov@gmail.com',
				icon: 'email' satisfies keyof typeof ICON_MAP,
			},
		],
	},
	educations: [
		{
			school: 'Faculty of Organization and Informatics',
			degree: "Bachelor's Degree in Business informatics",
			start: '2018',
			end: '2022',
		},
	],
	work: [
		{
			company: 'Cirtuo (Coupa)',
			link: 'https://www.linkedin.com/company/cirtuo/',
			badges: [
				'Remote',
				'AI',
				'Angular/Nx',
				'Monorepo',
				'TypeScript',
				'Dynamic PPT/PDF',
				'#NET',
			],
			role: 'Software Engineer',
			start: '2024',
			end: null,
			description:
				'Enterprise procurement and strategic sourcing platform that helps organizations plan, analyze, and execute supply chain strategies — covering spend analysis, supplier evaluation, risk management, and initiative tracking.',
			highlights: [
				'Planned and delivered refactors of multiple project pain points',
				'Led development of crucial features',
			],
		},
		{
			company: 'DataMir (Libelle AG)',
			link: 'https://www.linkedin.com/company/datamir/',
			badges: [
				'Remote',
				'Database Automation',
				'Data Orchestration',
				'React',
				'Webpack',
				'TypeScript',
				'Module Federation',
				'jQuery',
				'Python',
			],
			role: 'Software Engineer',
			start: '2022',
			end: '2024',
			description:
				'Database automation and data orchestration solutions which provide features such as disaster recovery, high availability, and data manipulation automation among others.',
			highlights: [
				'Architected migration of multiple projects to Typescript',
				'Oversaw and implemented module federation approach to projects',
				'Led development of crucial features',
			],
		},
		{
			company: 'Ovis software',
			link: 'https://www.ovis-software.com/',
			badges: [
				'Hybrid',
				'Telecommunications',
				'Phalcon PHP framework',
				'jQuery',
				'Bootstrap',
			],
			role: 'Software Engineer',
			start: '2021',
			end: '2021',
			description:
				'Involved in development of multiple projects such as all-in-one solution for telecom operators and harbor ships records solution',
			highlights: [
				'Project specification and planning',
				'Continuous delivery of crucial features',
			],
		},
	],
	skills: [
		'React/Next.js',
		'Angular/Nx',
		'TypeScript',
		'Tailwind CSS',
		'Design Systems',
		'WebSockets',
	],
	projects: [
		{
			title: 'Plahutica',
			techStack: [
				'Vercel',
				'React/Next.js',
				'TypeScript',
				'TailwindCSS',
				'Shadcn-ui',
			],
			description:
				'Traveling on a budget guide here to help you out with useful ideas or advices for your journey',
			link: 'https://plahutica.vercel.app/',
		},
		{
			title: 'Task Management Board',
			techStack: [
				'React/Next.js',
				'TypeScript',
				'TailwindCSS',
				'Shadcn-ui',
				'Firebase',
			],
			description:
				'Application providing you with an overview of tasks you create and manipulate with.',
			link: 'https://tmb-jk.vercel.app/',
		},
		{
			title: 'Better Timer',
			techStack: ['React/Next.js', 'TypeScript', 'PrimeReact', 'Firebase'],
			description: 'Easily track time spent on your tasks using Better Timer!',
			link: 'https://better-timer.vercel.app/',
		},
	],
} as const;
