import { Repository } from 'models/Repository';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Modal } from 'semantic-ui-react';

interface RepositoryDetailsModalProps {
  repository: Repository;
}
const RepositoryDetailsModal: React.FC<RepositoryDetailsModalProps> = ({ repository }) => {
  const {
    owner: { avatar_url },
    name,
    full_name,
    description,
    html_url,
    git_commits_url,
    branches_url,
    collaborators_url,
    issues_url,
    private: privateRepo,
  } = repository;
  return (
    <Modal.Content image scrolling>
      <Image size="medium" src={avatar_url} wrapped />
      <Modal.Description>
        <Header>
          <h2>{name}</h2>
          <h5>{privateRepo ? 'Private' : 'Public'}</h5>
        </Header>
        <>{full_name}</>
        <Link to={{ pathname: html_url }} target="_blank">
          {html_url}
        </Link>
        <p>{description}</p>
        <div>
          Commits :
          <Link to={{ pathname: html_url }} target="_blank">
            {` ${git_commits_url}`}
          </Link>
        </div>
        <div>
          Branches :
          <Link to={{ pathname: html_url }} target="_blank">
            {` ${branches_url}`}
          </Link>
        </div>
        <div>
          Collaborators :
          <Link to={{ pathname: html_url }} target="_blank">
            {` ${collaborators_url}`}
          </Link>
        </div>
        <div>
          Issues :
          <Link to={{ pathname: html_url }} target="_blank">
            {` ${issues_url}`}
          </Link>
        </div>
      </Modal.Description>
    </Modal.Content>
  );
};

export default RepositoryDetailsModal;
