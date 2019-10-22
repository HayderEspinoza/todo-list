import api from './api';

const baseUrl = 'tasks';

export const getTasks = () => {
  return api.get(`${baseUrl}`);
};
