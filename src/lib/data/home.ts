import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'John';

export const lastName = 'Borillo';

export const description =
	'Passionate software developer with experience in both frontend and backend systems using technologies like React, Next.js, Node.js, and cloud platforms. Outside of code, big music lover!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/johnborillo/'
	},
	{
		platform: Platform.Email,
		link: 'johnborillo8@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
