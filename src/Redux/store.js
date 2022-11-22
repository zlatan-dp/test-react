// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { taskReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
