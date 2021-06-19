import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import projectsReducer from '../features/projects/projectsSlice';
import aboutReducer from '../features/about/aboutSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    projects: projectsReducer,
    about: aboutReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
