// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({ reducer: rootReducer });
