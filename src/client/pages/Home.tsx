import { getPublicRepositories, getSearchedRepositories } from 'client/actions/github';
import RepositoryCard from 'client/components/RepositoryCard';
import { usePagination } from 'client/hooks/usePagination';
import { useDebounce } from 'client/hooks/useDebounce';
import { RootState, useAppDispatch } from 'client/_redux/app/store';
import { Repository } from 'models/Repository';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, DropdownProps, Input, Pagination, Select } from 'semantic-ui-react';
import { SortingValues, sortOptions } from 'client/constants/sortOptions';
import { addToFavorites, sortRepositories } from 'client/_redux/reducers/githubReducer';

const Home: React.FC = () => {
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

  const { paginatedData, handleNextPage, activePage, totalPages, setActivePage } = usePagination<Repository>(repositories, 30);
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivePage(1);
    setKeyword(event.target.value);
  };
  const onSort = (_: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    setActivePage(1);
    dispatch(sortRepositories(data.value as SortingValues));
  };
  const onMarkRepository = (id: number) => {
    dispatch(addToFavorites(id));
  };

  return (
    <div className="App">
      <h1>Repositories</h1>
      <div className="space-between py-1">
        <Input onChange={onSearch} loading={loading} placeholder="Search..." />
        <Select onChange={onSort} placeholder="Select your sort" options={sortOptions} />
      </div>
      <Card.Group>
        {paginatedData?.map((rep) => {
          const { name, owner, full_name, description, html_url, id, marked } = rep;
          return (
            <RepositoryCard
              key={id}
              onFavorite={onMarkRepository}
              {...{ name, owner, full_name, description, html_url, id, marked }}
            />
          );
        })}
      </Card.Group>
      <div className="center py-1">
        <Pagination
          onPageChange={handleNextPage}
          defaultActivePage={activePage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Home;
