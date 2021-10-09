import { getPublicRepositories } from 'client/actions/github';
import RepositoryCard from 'client/components/RepositoryCard';
import { usePagination } from 'client/hooks/usePagination';
import { RootState, useAppDispatch } from 'client/_redux/app/store';
import { Repository } from 'models/Repository';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Pagination } from 'semantic-ui-react';

const Home: React.FC = () => {
  const { repositories } = useSelector((state: RootState) => state.githubReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPublicRepositories());
  }, []);

  const { paginatedData, handleNextPage, activePage, totalPages } = usePagination<Repository>(
    repositories,
    30,
  );
  return (
    <div className="App">
      <h1>Repositories</h1>
      {paginatedData?.map((rep) => {
        const { name, owner, full_name, description, html_url } = rep;
        return (
          <Card.Group>
            <RepositoryCard {...{ name, owner, full_name, description, html_url }} />
          </Card.Group>
        );
      })}
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
