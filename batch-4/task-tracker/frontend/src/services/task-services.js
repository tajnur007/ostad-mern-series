import axios from 'axios';
import { API_BASE_URL } from '../utils/constants/common-constants';
import { getAuthToken } from '../utils/helpers/common-helpers';


export const getAllTasks = () => {
  const authToken = getAuthToken();

  return axios({
    method: 'GET',
    url: `${API_BASE_URL}/tasks`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    }
  });
};

export const createTask = (payload) => {
  const authToken = getAuthToken();

  return axios({
    method: 'POST',
    url: `${API_BASE_URL}/task`,
    data: payload,
    headers: {
      Authorization: `Bearer ${authToken}`,
    }
  });
};
