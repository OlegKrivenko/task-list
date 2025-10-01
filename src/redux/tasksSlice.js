import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  fetchTasks,
  toggleCompleted,
} from '../redux/operations';

const tasksInitialState = {
  tasksArray: [],
  isLoading: false,
  error: null,
};

const setPendingState = state => {
  state.isLoading = true;
};

const setRejectedState = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: builder => {
    builder
      // fetchTasks
      .addCase(fetchTasks.pending, setPendingState)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasksArray = action.payload;
      })
      .addCase(fetchTasks.rejected, setRejectedState)
      // addTask
      .addCase(addTask.pending, setPendingState)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasksArray.push(action.payload);
      })
      .addCase(addTask.rejected, setRejectedState)
      // deleteTask
      .addCase(deleteTask.pending, setPendingState)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasksArray.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasksArray.splice(index, 1);
        }
      })
      .addCase(deleteTask.rejected, setRejectedState)
      // toggleCompleted
      .addCase(toggleCompleted.pending, setPendingState)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasksArray = state.tasksArray.map(task =>
          task.id === action.payload.id
            ? { ...task, completed: action.payload.completed }
            : task
        );
      })
      .addCase(toggleCompleted.rejected, setRejectedState);
  },
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.tasksArray.push(action.payload);

  //       // =========================================without mutation========================
  //       // return { ...state, tasksArray: [...state.tasksArray, action.payload] };
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(),
  //           completed: false,
  //         },
  //       };
  //     },
  //   },
  //   deleteTask(state, action) {
  //     const index = state.tasksArray.findIndex(
  //       task => task.id === action.payload
  //     );
  //     state.tasksArray.splice(index, 1);

  //     // =========================================without mutation========================
  //     //   return {
  //     //     ...state,
  //     //     tasksArray: state.tasksArray.filter(task => task.id !== action.payload),
  //     //   };
  //   },
  //   toggleCompleted(state, action) {
  //     for (const task of state.tasksArray) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //       }
  //     }

  //     // =========================================without mutation========================
  //     //   return {
  //     //     ...state,
  //     //     tasksArray: state.tasksArray.map(task =>
  //     //       task.id === action.payload
  //     //         ? { ...task, completed: !task.completed }
  //     //         : task
  //     //     ),
  //     //   };
  //   },
  // },
});

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.tasksArray.push(action.payload);

//         // =========================================without mutation========================
//         // return { ...state, tasksArray: [...state.tasksArray, action.payload] };
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       const index = state.tasksArray.findIndex(
//         task => task.id === action.payload
//       );
//       state.tasksArray.splice(index, 1);

//       // =========================================without mutation========================
//       //   return {
//       //     ...state,
//       //     tasksArray: state.tasksArray.filter(task => task.id !== action.payload),
//       //   };
//     },
//     toggleCompleted(state, action) {
//       for (const task of state.tasksArray) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//         }
//       }

//       // =========================================without mutation========================
//       //   return {
//       //     ...state,
//       //     tasksArray: state.tasksArray.map(task =>
//       //       task.id === action.payload
//       //         ? { ...task, completed: !task.completed }
//       //         : task
//       //     ),
//       //   };
//     },
//   },
// });
