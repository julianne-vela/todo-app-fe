export const USER = 'USER';

export function getLocalStorage() {
	let token = '';
	const json = localStorage.getItem(USER);
	if (json) {
		const user = JSON.parse(json);
		token = user.token;
	}

	return token;
}

export function setLocalStorage(token) {
	localStorage.setItem(USER, JSON.stringify(token));
}
