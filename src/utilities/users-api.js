import { getToken } from "./users-service";


const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}


export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}


export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}




async function sendRequest(url, method = 'GET', payload = null) {
 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

 
  const token = getToken()
  if (token) {
    options.headers = options.headers || {}

 
    options.headers.Authorization = `Bearer ${token}`;
  }
  const backendResponse = await fetch(url, options);
 
  if (backendResponse.ok) return backendResponse.json();
  throw new Error('Bad Request');

}













