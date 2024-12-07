import type { ISocial } from '@types/social.interface';

export default function () {
	return useState('social', (): ISocial[] => [

	]);
}
