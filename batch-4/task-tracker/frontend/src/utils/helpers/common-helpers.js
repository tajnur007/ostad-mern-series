import { STORAGE_KEYS } from '../constants/common-constants';

export const getAuthToken = () => {
  const localStorageAuthToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  return localStorageAuthToken ? JSON.parse(localStorageAuthToken) : '';
};