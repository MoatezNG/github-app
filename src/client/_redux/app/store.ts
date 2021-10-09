import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
