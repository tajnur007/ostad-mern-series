import axios from 'axios';


export const createUser = (userData) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:5000/user',
    data: userData,
  });
};

export const login = (data) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:5000/auth/signin',
    data: data,
  });
};

