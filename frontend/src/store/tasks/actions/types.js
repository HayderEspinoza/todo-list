import { createActionTypes } from '../../../utils/helpers';

export default {
  ...createActionTypes('TASKS', 'GET_TASKS'),
  ...createActionTypes('TASKS', 'ADD_TASK')
};
