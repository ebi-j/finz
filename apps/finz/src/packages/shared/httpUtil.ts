const BASE_URL = 'http://localhost:3000/api';

export const get = async (url: string) => {
	const response = await fetch(`${BASE_URL}${url}`);
	return response.json();
};

export const post = async <TData extends object>(url: string, data: TData): Promise<TData> => {
	const response = await fetch(`${BASE_URL}${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json() as Promise<TData>;
};
