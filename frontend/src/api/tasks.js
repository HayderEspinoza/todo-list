import api from './api';

const baseUrl = 'tasks';

export const getTasks = date => {
  return api.get(`${baseUrl}?date=${date}`);
};

export const addTask = data => {
  return api.post(`${baseUrl}`, data);
};
