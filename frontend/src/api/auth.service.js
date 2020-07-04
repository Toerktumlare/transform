import axios from "axios";

export const authService = {
  login,
};

function login(username, password) {
  const params = new URLSearchParams();

  params.append('username', username);
  params.append('password', password);
  
  return axios.post('/login', params);
}
