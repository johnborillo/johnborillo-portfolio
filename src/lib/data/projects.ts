import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'mnemo',
		color: '#5e95e3',
		description:
			'mnemo is a Progressive Web Application (PWA) built with Next.js that helps you understand how your days feel in hindsight. It allows you to log daily experiences related to "novelty" and "perceived day length," providing insights into how these factors correlate and influence your perception of time. The application aims to reveal why some days fly by quickly while others feel long and rich.',
		shortDescription:
			'A PWA that helps you reflect on your days by tracking novelty and perceived day length to reveal patterns in how you experience time.',
		links: [
			{ to: 'https://mnemo-tan.vercel.app/', label: 'Website' },
			{ to: 'https://github.com/johnborillo/mnemo', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'mnemo',
		period: {
			from: new Date(2025, 8, 19)
		},
		skills: getSkills('nextjs', 'reactjs', 'tailwind', 'dexie', 'vercel', 'js', 'html'),
		type: 'Progressive Web App (PWA)',
		screenshots: [
			{
				label: 'Welcome',
				src: `${base}/images/mnemo0.png`
			},
			{
				label: 'Home',
				src: `${base}/images/mnemo1.png`
			},
			{
				label: 'Daily Journal Entry',
				src: `${base}/images/mnemo2.png`
			},
			{
				label: 'Insights',
				src: `${base}/images/mnemo3.png`
			}
		]
	},
	{
		slug: 'filmbase',
		color: '#ff3e00',
		description:
			'FilmBase is a React application built with Vite that allows users to explore various film characteristics. This project leverages modern web development tools and practices, including Tailwind CSS for styling, React Router for client-side routing, and several utility libraries to enhance the development experience.',
		shortDescription:
			'A central database/repository where users can scout for photos based on different film stocks. (WIP)',
		links: [{ to: 'https://github.com/johnborillo/filmbase', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Filmbase',
		period: {
			from: new Date(2025, 0, 18)
		},
		skills: getSkills('reactjs', 'tailwind', 'supabase', 'vercel'),
		type: 'Database / Repository Website'
	},
	{
		slug: 'ellehacks2023',
		color: 'purple',
		description:
			'The ellehacks2023 project is a hackathon-built web platform designed to help users discover and evaluate NGOs by providing details on their mission, impact, and transparency, with search and filtering by geography or issue area. Inspired by real-world disasters, it aims to connect people to relevant organizations and encourage responsible giving, while also tracking contributions to foster engagement. Built with React, Material UI, Node.js, Express, OpenAI’s API, and ECharts, the project focused on rapid prototyping under time constraints and strong teamwork. Future plans include integrating MongoDB for a full MERN stack, improving responsiveness and UI/UX, and adding distinct authentication flows for users and NGOs.',
		shortDescription:
			"Ellehacks 2023 hackathon project. We provide detailed information about each NGO's mission, impact, financial transparency, and accountability.",
		links: [{ to: 'https://github.com/johnborillo/filmbase', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'ellehacks2023',
		period: {
			from: new Date(2023, 1, 18),
			to: new Date(2023, 1, 19)
		},
		skills: getSkills('html', 'css', 'js', 'reactjs'),
		type: 'Database / Repository Website'
	},
	{
		slug: 'ChainLink',
		color: 'blue',
		description:
			'System aimed at improving transparency, efficiency, and security in the supply chain industry. Utilizing blockchain technology, the system aims to provide real-time tracking and verification of goods, as well as enabling secure and seamless communication.',
		shortDescription:
			'nwHacks 2023 project - A decentralized supply chain management system built with React and Solidity',
		links: [{ to: 'https://github.com/johnborillo/ChainLink', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'ChainLink',
		period: {
			from: new Date(2023, 0, 21),
			to: new Date(2023, 0, 22)
		},
		skills: getSkills('html', 'css', 'js', 'reactjs'),
		type: 'Tool'
	}
];

export const title = 'Projects';
