import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import RepositoryDetailsModal from '../../components/RepositoryDetailsModal';
import { repository } from '../mocks/repository';

describe('RepositoryDetailsModal', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RepositoryDetailsModal repository={repository} />
      </BrowserRouter>,
    );
  });
  it('it should commits link', async () => {
    expect(
      screen.getByText('https://api.github.com/repos/mojombo/grit/git/commits{/sha}'),
    ).toBeDefined();
  });
  it('it should  render nothing', async () => {
    expect(screen.queryByText('none')).toBeNull();
  });
});
