import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'world-vision',
		company: 'World Vision Canada',
		description:
			'Developed AI chatbots, proof-of-concepts with Microsoft Copilot Studio and Azure AI, created documentation, and supported cross-functional automation initiatives. Contributed to mobile-first app development with React Native, FastAPI, PostgreSQL, Stripe integration, and Docker.',
		contract: ContractType.Internship,
		type: 'Research & Software Development',
		location: 'Mississauga, ON',
		period: { from: new Date(2024, 8, 1), to: new Date(2025, 8, 1) },
		skills: getSkills(
			'js',
			'ts',
			'reactjs',
			'postgresql',
			'azure',
			'powerapps',
			'powerautomate',
			'sharepoint'
		),
		name: 'Research & Software Developer Intern',
		color: 'orange',
		links: [],
		logo: Assets.WVC,
		shortDescription:
			'AI chatbot development, PoC research, and mobile-first full-stack app contributions.'
	},
	{
		slug: 'little-symphony',
		company: 'Little Symphony Records (enjou)',
		description:
			'Improved performance with Next.js and ChakraUI, implemented new features, refactored Node.js endpoints, and resolved Supabase issues. Led marketing site development, internal tools, and a capstone project integrating Supabase, Cypress testing, and GitHub Actions pipelines.',
		contract: ContractType.Internship,
		type: 'Full-Stack Development',
		location: 'Edmonton, AB',
		period: { from: new Date(2023, 8, 1), to: new Date(2024, 8, 1) },
		skills: getSkills('nextjs', 'chakraui', 'nodejs', 'supabase', 'github'),
		name: 'Full-Stack Software Developer Intern',
		color: 'orange',
		links: [],
		logo: Assets.Enjou,
		shortDescription:
			'Optimized performance, built features, and streamlined pipelines for web applications.'
	},
	{
		slug: 'microsoft',
		company: 'Microsoft Corporation',
		description:
			'Internship focused on business program management and cloud solutions using Azure. Collaborated with a team of interns to migrate an on-premises org to the cloud, developed an AI-enabled prototype, and pitched solutions to senior leadership.',
		contract: ContractType.Internship,
		type: 'Business Program Management',
		location: 'Toronto, ON',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 7, 1) },
		skills: getSkills('azure', 'powerapps', 'ai', 'cloud'),
		name: 'Business Program Manager Intern',
		color: 'blue',
		links: [],
		logo: Assets.Microsoft,
		shortDescription:
			'Azure-focused business program internship delivering AI and cloud migration solutions.'
	},
	{
		slug: 'code-ninjas',
		company: 'Code Ninjas',
		description:
			'Taught kids programming by helping debug code, tailoring curriculum, and engaging parents. Designed curriculum in collaboration with CAS representatives and fostered passion for coding.',
		contract: ContractType.PartTime,
		type: 'Education',
		location: 'Brampton, ON',
		period: { from: new Date(2021, 7, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('js', 'html', 'css', 'teaching', 'mentorship'),
		name: 'Coding Instructor',
		color: 'green',
		links: [],
		logo: Assets.CodeNinjas,
		shortDescription: 'Taught programming to kids and developed tailored coding curriculum.'
	}
];

export const title = 'Experience';
