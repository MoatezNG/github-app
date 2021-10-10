import { createAsyncThunk } from '@reduxjs/toolkit';
import * as githubService from 'client/services/github';
import { searchParams } from 'types/utils';

export const getPublicRepositories = createAsyncThunk(
  'github/repositories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await githubService.getPublicRepositories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const getSearchedRepositories = createAsyncThunk(
  'github/searchedRepositories',
  async (params: searchParams, { rejectWithValue }) => {
    try {
      const data = await githubService.getSearchedRepositories(params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
