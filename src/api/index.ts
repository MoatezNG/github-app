import axios from 'axios';

const CLIENT_API = `${process.env.RAZZLE_REACT_APP_HOST}${process.env.RAZZLE_API_PREFIX}`;

export const clientApi = axios.create({
  baseURL: CLIENT_API,
});

export const githubApi = axios.create({
  baseURL: process.env.RAZZLE_GITHUB_API,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});
