import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPublicRepositories, getSearchedRepositories } from 'client/actions/github';
import { SortingValues } from 'client/constants/sortOptions';
import { Repository } from 'models/Repository';
import { PaginatedResponse } from 'types/utils';

export type githubSlice = {
  repositories: Repository[];
  loading: boolean;
};

const initialState: githubSlice = {
  repositories: [],
  loading: false,
};
export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    sortRepositories: (state: githubSlice, { payload }: PayloadAction<SortingValues>) => {
      switch (payload) {
        case 'ALPHA':
          state.repositories = state.repositories.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'FAVORITES':
          state.repositories = state.repositories.sort((el) => (el.marked ? -1 : 1));
          break;
        default:
          break;
      }
    },
    addToFavorites: (state: githubSlice, { payload }: PayloadAction<number>) => {
      state.repositories = state.repositories.map((el) =>
        (el.id === payload ? { ...el, marked: !el.marked } : el),
      );
    },
  },
  extraReducers: {
    [getPublicRepositories.pending.type]: (state) => {
      state.loading = true;
    },
    [getPublicRepositories.fulfilled.type]: (
      state: githubSlice,
      { payload }: PayloadAction<Repository[]>,
    ) => {
      state.repositories = payload;
      state.loading = false;
    },
    [getPublicRepositories.rejected.type]: (state) => {
      state.loading = false;
    },

    // search
    [getSearchedRepositories.pending.type]: (state) => {
      state.loading = true;
    },

    [getSearchedRepositories.fulfilled.type]: (
      state,
      { payload }: PayloadAction<PaginatedResponse<Repository>>,
    ) => {
      state.repositories = [...payload.items, ...state.repositories];
      state.loading = false;
    },
    [getSearchedRepositories.rejected.type]: (state) => {
      state.loading = false;
      state.repositories = [];
    },
  },
});
export const { sortRepositories, addToFavorites } = githubSlice.actions;

export default githubSlice.reducer;
