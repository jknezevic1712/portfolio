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
		'Senior Frontend Engineer focused on React and Angular, building production web applications for enterprise clients and startups. I specialize in developing maintainable frontend systems, delivering complex features end-to-end, and contributing to architecture decisions across enterprise SaaS products.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/190621376?v=4',
	metadata: {
		baseUrl: 'https://portfolio-jknezevic.vercel.app',
		title: 'Jakov Knežević | Senior Software Engineer',
		description:
			'Senior Frontend Engineer focused on React and Angular, building production web applications for enterprise clients and startups.',
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
				'Developing Guided Strategy Creation (GSC), a customer-facing enterprise SaaS platform for strategic sourcing and procurement',
			highlights: [
				'Build and maintain complex frontend workflows using Angular and TypeScript',
				'Work with NgRx for state management and PrimeNG and AG Grid for rich, data-intensive user interfaces',
				'Develop within an Nx-based codebase, working with application and shared-library structures',
				'Contribute to maintainability, testing, and the evolution of frontend features in a production enterprise application',
				'Collaborate with the wider engineering team to deliver customer-facing functionality',
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
				'Database automation and data orchestration solutions which provide features such as disaster recovery, high availability, and data manipulation automation among others',
			highlights: [
				'Led TypeScript migration of legacy JavaScript codebases, improving type safety and reducing runtime errors',
				'Designed and implemented Module Federation architecture across three products, enabling independent deployments and more decoupled release cycles',
				'Worked across multiple product lines regarding system availability automation, data manipulation, and cross-database migration among others',
				'Developed data visualization dashboards for monitoring large-scale database operations',
				'Mentored junior developers on React patterns and code review standards',
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
				'Planning and development of software solutions for telecommunications and maritime industries',
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
