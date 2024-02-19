import axios from 'axios';
import { API_BASE_URL } from '../utils/constants/common-constants';


export const createUser = (userData) => {
  return axios({
    method: 'POST',
    url: `${API_BASE_URL}/user`,
    data: userData,
  });
};

export const login = (data) => {
  return axios({
    method: 'POST',
    url: `${API_BASE_URL}/auth/signin`,
    data: data,
  });
};

