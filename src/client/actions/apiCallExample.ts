import { createAsyncThunk } from '@reduxjs/toolkit';

export const apiCall = createAsyncThunk(
  'api/endpoint',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async ({ anyArgs }: any, { rejectWithValue }) => {
    try {
      return anyArgs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
