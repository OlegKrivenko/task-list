import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from 'operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tasksInitialState = {
  tasksArray: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasksArray = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasksArray.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
      })
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
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(toggleCompleted.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasksArray = state.tasksArray.map(task =>
          task.id === action.payload.id
            ? { ...task, completed: action.payload.completed }
            : task
        );
      })
      .addCase(toggleCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
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
