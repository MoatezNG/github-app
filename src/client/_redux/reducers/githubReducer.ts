import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPublicRepositories } from 'client/actions/github';
import { Repository } from 'models/Repository';

export type countState = {
  repositories: Repository[];
  loading: boolean;
};

const initialState: countState = {
  repositories: [],
  loading: false,
};
export const countSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: {
    [getPublicRepositories.pending.type]: (state) => {
      state.loading = true;
    },
    [getPublicRepositories.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Repository[]>,
    ) => {
      state.repositories = payload;
      state.loading = false;
    },
    [getPublicRepositories.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default countSlice.reducer;
