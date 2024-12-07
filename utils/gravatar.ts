import md5 from 'md5';

export default function (email: string, size: number = 200) {
	const base = 'https://www.gravatar.com/avatar/';
	const emailHash = md5(email.trim().toLowerCase());
	return `${base}${emailHash}?s=${size}`;
}
