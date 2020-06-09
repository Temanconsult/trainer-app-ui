import http from './http';

export const signup = async (payload) =>
  await http.post('/users', {...payload});
export const login = async (payload) =>
  await http.post('/auth/login', {...payload});
