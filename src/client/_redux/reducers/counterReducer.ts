import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from 'client/actions/apiCallExample';

export type countState = {
  count: number;
  loading: boolean;
};

const initialState: countState = {
  count: 0,
  loading: false,
};
export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementAction: (state) => {
      state.count += 1;
    },
  },
  extraReducers: {
    [apiCall.pending.type]: (state) => {
      state.loading = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [apiCall.fulfilled.type]: (state, { payload }: any) => {
      const { count } = payload;
      state.count = count;
    },
    [apiCall.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export const { incrementAction } = countSlice.actions;
export default countSlice.reducer;
