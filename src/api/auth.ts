import http from './http';

export const signup = async payload => await http.post('/auth/register', {...payload});
export const login = async payload => await http.post('/auth/login', {...payload});
