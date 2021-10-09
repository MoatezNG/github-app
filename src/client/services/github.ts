import { githubApi } from 'api';
import { Repository } from 'models/Repository';
import { PaginatedResponse, searchParams } from 'types/utils';

const BASE_URL = '/repositories';
export const getPublicRepositories = async () => {
  const response = await githubApi.get<Repository[]>(BASE_URL);
  return response.data;
};

export const getSearchedRepositories = async (params: searchParams) => {
  const response = await githubApi.get<PaginatedResponse<Repository>>(`/search${BASE_URL}`, {
    params: {
      ...params,
      per_page: 100,
    },
  });
  return response.data;
};
