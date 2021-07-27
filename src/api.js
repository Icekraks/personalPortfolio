import { toast } from 'react-toastify';
import mainStore from "./mainStore";



export const API_BASE_URL = 'http://localhost:8080/',
	debug = 'true';

export function getLocalToken(){
	return localStorage.getItem('IcekraksBlog:credentials');
}
export function setLocalToken(token){
	mainStore.token = token;
	localStorage.setItem('IcekraksBlog:credentials',token);
}

const callApi = async (path, method, body) => {
	let options = {
		method,
		headers: {
			'app-version':'web'
		}
	};
	if (method.toLowerCase() !== 'get') {
		options.body = JSON.stringify(body);
	}
	let res;
	console.log(options);
	try {
		//.then causing the issue
		res = await fetch(`${API_BASE_URL}${path}`, options).then(res=>res.json());
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

export async function testAPI(path){
	const res = await callApi(path, 'GET',null);
	if (res instanceof Error) {
		toast.error(res.message);
		return null;
	}

	return res;
}

export async function getStats(name) {
	const res = await callApi(name, 'GET', null);
	if (res instanceof Error) {
		toast.error(res.message);
		return null;
	}
	return res;
}

export async function getAllUsers(){
	const res = await callApi("allUser", 'GET', null);
	if (res instanceof Error) {
		toast.error(res.message);
		return null;
	}
	return res;
}



export async function signIn(username,password){
	const res = 'token';
	// const res = await callApi(path, 'POST', null);
	//TODO: Check for token Error
	if(username!=='Icekraks' || password!=='lol'){
		toast.error('Wrong Password');
		return null;
	}
	//TODO: remember to stringify the json down the line
	setLocalToken(res);
	return res;


}
export function signOut(){
	localStorage.removeItem('IcekraksBlog:credentials');
	mainStore.setPageName('Home');
}

export async function validateCredentials(localToken){
	const res = 'token';
	if(localToken!==null) {
		console.log(localToken.toString());
	}
	// const res = await callApi(path, 'POST', null);
	//TODO: Check for token Error
	if(res!==localToken){
		toast.error('Token not Valid.');
		return null;
	}
	return true;
}
