import RepositoryCard from 'client/components/RepositoryCard';
import RepositoryDetailsModal from 'client/components/RepositoryDetailsModal';
import { sortOptions } from 'client/constants/sortOptions';
import { Repository } from 'models/Repository';
import React, { useState } from 'react';
import { Card, Input, Modal, Pagination, Select } from 'semantic-ui-react';
import { useRepositoriesList } from './useRepositoriesList';

const RepositoriesList: React.FC = () => {
  const {
    activePage,
    onSearch,
    handleNextPage,
    totalPages,
    loading,
    onMarkRepository,
    onSort,
    paginatedData,
  } = useRepositoriesList();

  const [open, setOpen] = React.useState(false);
  const [selectedRepository, setSelectedRepository] = useState<Repository | undefined>();
  const onShowMoreDetails = (repository: Repository) => {
    setSelectedRepository(repository);
    setOpen(true);
  };
  return (
    <div>
      <div className="space-between py-1">
        <Input onChange={onSearch} loading={loading} placeholder="Search..." />
        <Select onChange={onSort} placeholder="Select your sort" options={sortOptions} />
      </div>
      <Card.Group>
        {paginatedData?.map((rep) => (
          <RepositoryCard
            showMoreDetails={onShowMoreDetails}
            key={rep.id}
            onFavorite={onMarkRepository}
            repository={rep}
          />
        ))}
      </Card.Group>
      <div className="center py-1">
        <Pagination
          onPageChange={handleNextPage}
          defaultActivePage={activePage}
          totalPages={totalPages}
        />
      </div>
      {selectedRepository && (
        <Modal onClose={() => setOpen(false)} open={open}>
          <RepositoryDetailsModal repository={selectedRepository} />
        </Modal>
      )}
    </div>
  );
};

export default RepositoriesList;
