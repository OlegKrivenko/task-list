// import { combineReducers } from 'redux';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';
import { statusFilters } from './constants';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];
    case deleteTask.type:
      return state.filter(task => task.id !== action.payload);

    case toggleCompleted.type:
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
  }
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const filtersInitialState = {
  status: statusFilters.all,
};
export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
