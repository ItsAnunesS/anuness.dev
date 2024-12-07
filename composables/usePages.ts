import type { IPages } from '@types/pages.interface';

export default function () {
	return useState('pages', (): IPages[] => []);
}
