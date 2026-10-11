import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const ICON_MAP = {
	github: AiFillGithub,
	linkedin: AiFillLinkedin,
	email: AiFillMail,
} as const;

export const RESUME_DATA = {
	name: 'Jakov Knežević',
	role: 'Senior Software Engineer',
	initials: 'JK',
	location: 'Zagreb, Croatia, CET',
	locationLink: 'https://www.google.com/maps/place/Zagreb',
	about: 'Senior Software Engineer crafting web experiences from concept to production.',
	summary:
		'Senior Software Engineer focused on building production web applications with React, Angular, and TypeScript. My experience spans enterprise SaaS and product teams, from delivering complex customer-facing workflows to contributing to frontend architecture across multiple products.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/190621376?v=4',
	metadata: {
		baseUrl: 'https://portfolio-jknezevic.vercel.app',
		title: 'Jakov Knežević | Senior Software Engineer',
		description:
			'Senior Software Engineer focused on building production web applications with React, Angular, and TypeScript.',
	},
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
				'Python',
			],
			role: 'Software Engineer',
			start: '2024',
			end: null,
			description:
				'Enterprise procurement and strategic sourcing platform that helps organizations plan, analyze, and execute supply chain strategies — covering spend analysis, supplier evaluation, risk management, and initiative tracking.',
			highlights: [
				'Built key frontend features for strategy and supplier modules (executive summaries, SWOT/risk views, supplier performance, PPT/PDF reporting)',
				'Developed supplier evaluation flows end-to-end — evaluation rounds, imports, grading logic, supplier letters with bulk send/download',
				'Modernized Angular UI stack (route guards, shared components, grids, PrimeNG and SCSS upgrades)',
				'Led frontend migration of configuration tooling to a unified model, enabling configurable evaluation setups without custom code',
				'Prototyped a RAG pipeline using Python, FastAPI, vector embeddings, and vision/text LLMs to turn presentation decks into cited Yes/No answers against a 500+ item strategy questionnaire',
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
				'Architected TypeScript migration of legacy JavaScript codebases, improving type safety and reducing runtime errors',
				'Implemented module federation architecture across 3 products, enabling independent team deployments',
				'Built and maintained UIs for SAP automation, disaster recovery, and database migration tools',
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
				'Delivered features for an all-in-one telecom operator management platform',
				'Built a harbor ships records system for tracking vessel data and documentation',
				'Participated in project specification, planning, and continuous delivery cycles',
			],
		},
	],
	skills: [
		'React',
		'Next.js',
		'Angular',
		'Nx',
		'Vue',
		'Nuxt',
		'TypeScript',
		'JavaScript',
		'Node.js',
		'Tailwind CSS',
		'Redux',
		'NgRx',
		'Zustand',
		'Firebase',
		'Docker',
		'REST APIs',
		'Cypress',
		'CI/CD',
		'Webpack',
		'Module Federation',
		'Git',
		'Design Systems',
		'WebSockets',
		'Drizzle ORM',
		'Prisma',
	],
	projects: [
		{
			title: 'Interview Ready (work in progress)',
			techStack: [
				'AI',
				'Tanstack Start',
				'React',
				'TypeScript',
				'Shadcn-ui',
				'TailwindCSS',
				'Vite',
				'NestJS',
				'Prisma',
			],
			description:
				'Full-stack AI-powered technical interview preparation platform featuring interactive quizzes, AI-generated questions, progress tracking, and structured technical interview practice',
			link: 'https://github.com/jknezevic1712/interview-ready',
		},
		{
			title: 'Ledgr (work in progress)',
			techStack: [
				'Tanstack Start',
				'React',
				'TypeScript',
				'Shadcn-ui',
				'TailwindCSS',
				'Better Auth',
				'Drizzle',
				'Vite',
			],
			description:
				'Personal finance management application for tracking income and expenses, organizing transactions, managing budgets, and analyzing spending patterns through an interactive dashboard',
			link: 'https://github.com/jknezevic1712/ledgr',
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
				'Task management web application built with Next.js, React, and TypeScript, featuring Google authentication, Firestore data persistence, drag-and-drop workflows, filtering, and Zustand-based state management',
			link: 'https://tmb-jk.vercel.app/',
		},
	],
} as const;
