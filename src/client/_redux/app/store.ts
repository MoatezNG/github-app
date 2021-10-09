import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import githubReducer from '../reducers/githubReducer';

const rootReducer = combineReducers({
  githubReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
