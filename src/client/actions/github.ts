import { createAsyncThunk } from '@reduxjs/toolkit';
import * as githubService from 'client/services/github';

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
