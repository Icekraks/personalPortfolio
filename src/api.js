import { toast } from 'react-toastify';
import storeInstance from './mainStore';



export const API_BASE_URL = 'https://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=',
	debug = process.env.REACT_APP_DEBUG === 'true';

const callApi = async (path, method, body) => {
	let options = {
		method,
		headers: {
			'app-version': 'web',
		}
	};
	if (method.toLowerCase() !== 'get') {
		options.body = JSON.stringify(body);
	}
	let res;
	try {
		res = await fetch(`${API_BASE_URL}${path}`, options).then(res => res.json());
	} catch (e) {
		debug && console.error(e);
		// toast.error('An unexpected error occurred');
		return new Error('An unexpected error occurred.');
	}
	if (res.error) {
		debug && console.error(res.error.desc);
		return new Error(res.error.desc);
	}
	return res;
};

export async function getStats(name) {
	const res = await callApi(name, 'GET', null);
	if (res instanceof Error) {
		toast.error(res.message);
		return null;
	}
	return res;
}
