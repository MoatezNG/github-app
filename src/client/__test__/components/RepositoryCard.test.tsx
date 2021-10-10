import { render, screen, fireEvent } from '@testing-library/react';
import { Repository } from 'models/Repository';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RepositoryCard from '../../components/RepositoryCard';
import { repository } from '../mocks/repository';

const onFavoriteMock = jest.fn((id: number) => id);
const onShowMoreDetails = jest.fn((rep: Repository) => rep);

describe('RepositoryCard', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RepositoryCard
          onFavorite={onFavoriteMock}
          showMoreDetails={onShowMoreDetails}
          repository={repository}
        />
      </BrowserRouter>,
    );
  });
  it('it should render repository full text', async () => {
    expect(screen.getByText('mojombo/grit')).toBeDefined();
  });
  it('it should render repository description', async () => {
    expect(
      screen.getByText(
        // eslint-disable-next-line max-len
        '**Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby.',
      ),
    ).toBeDefined();
  });

  it('it should  render nothing', async () => {
    expect(screen.queryByText('none')).toBeNull();
  });
  it('it should return the selected id', async () => {
    fireEvent.click(screen.getByTestId('favorite-icon'));
    expect(onFavoriteMock).toBeCalledWith(1);
  });
  it('it should fail the selected id', async () => {
    fireEvent.click(screen.getByTestId('favorite-icon'));
    expect(onFavoriteMock).not.toBeCalledWith(3);
  });
  it('it should return the selected  repository', async () => {
    fireEvent.click(screen.getByTestId('show-more'));
    expect(onShowMoreDetails).toBeCalledWith(repository);
  });
  it('it should fail the selected  repository', async () => {
    fireEvent.click(screen.getByTestId('show-more'));
    expect(onShowMoreDetails).not.toBeCalledWith({
      id: 3,
      name: 'wrong repository',
    });
  });
});
