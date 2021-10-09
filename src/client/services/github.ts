import { githubApi } from 'api';
import { Repository } from 'models/Repository';

const BASE_URL = '/repositories';
export const getPublicRepositories = async () => {
  const response = await githubApi.get<Repository[]>(BASE_URL);
  return response.data;
};
