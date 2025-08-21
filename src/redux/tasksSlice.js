import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tasksInitialState = {
  tasksArray: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        return { ...state, tasksArray: [...state.tasksArray, action.payload] };
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      return {
        ...state,
        tasksArray: state.tasksArray.filter(task => task.id !== action.payload),
      };
    },
    toggleCompleted(state, action) {
      return {
        ...state,
        tasksArray: state.tasksArray.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

const persistConfig = {
  key: 'tasks',
  storage,
};
export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);
