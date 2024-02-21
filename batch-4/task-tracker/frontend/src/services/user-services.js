import axios from 'axios';
import { API_BASE_URL } from '../utils/constants/common-constants';
import { getAuthToken } from '../utils/helpers/common-helpers';


export const getAllUsers = () => {
  const authToken = getAuthToken();

  return axios({
    method: 'GET',
    url: `${API_BASE_URL}/users`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    }
  });
};

export const createUser = (payload) => {
  const authToken = getAuthToken();

  return axios({
    method: 'POST',
    url: `${API_BASE_URL}/user`,
    data: payload,
    headers: {
      Authorization: `Bearer ${authToken}`,
    }
  });
};