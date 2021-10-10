import { getPublicRepositories, getSearchedRepositories } from 'client/_redux/actions/github';
import { RootState, useAppDispatch } from 'client/_redux/app/store';
import { addToFavorites, sortRepositories } from 'client/_redux/reducers/githubReducer';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'client/hooks/useDebounce';
import { usePagination } from 'client/hooks/usePagination';
import { DropdownProps } from 'semantic-ui-react';
import { SortingValues } from 'client/constants/sortOptions';
import { Repository } from 'models/Repository';

export const useRepositoriesList = () => {
  const { repositories, loading } = useSelector((state: RootState) => state.githubReducer);
  const [keyword, setKeyword] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPublicRepositories());
  }, []);
  const debounceSearchTerm = useDebounce(keyword, 500);

  useEffect(() => {
    if (!debounceSearchTerm) return;
    dispatch(getSearchedRepositories({ q: debounceSearchTerm }));
  }, [debounceSearchTerm]);

  const { paginatedData, handleNextPage, activePage, totalPages, resetPage } = usePagination<Repository>(repositories, 30);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetPage();
    setKeyword(event.target.value);
  };
  const onSort = (_: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    resetPage();
    dispatch(sortRepositories(data.value as SortingValues));
  };

  const onMarkRepository = (id: number) => {
    dispatch(addToFavorites(id));
  };

  return {
    onSearch,
    onSort,
    onMarkRepository,
    paginatedData,
    handleNextPage,
    activePage,
    totalPages,
    loading,
  };
};
