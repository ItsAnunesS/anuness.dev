import type { IProjects } from '@types/projects.interface';

export default function () {
	return useState('projects', (): IProjects[] => [
		{
			name: 'Zephyrus Prosperity',
			description: 'A holding company focused on innovation and prosperity.',
			image: 'https://via.placeholder.com/300x200',
			url: 'https://zephyrus.pt/',
		},
		{
			name: 'DynatriSoft Games',
			description: 'AAA game studio creating immersive stories and gameplay.',
			image: 'https://via.placeholder.com/300x200',
			url: 'https://dynatrisoft.com/',
		},
	]);
}
