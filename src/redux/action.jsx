import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'taks/addTask',
    payload: { id: nanoid(), textcompleted: false },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'task/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filter/setStatusFilter',
    payload: value,
  };
};
