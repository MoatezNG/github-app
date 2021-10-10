import { Repository } from 'models/Repository';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

interface RepositoryCardProps {
  repository: Repository;
  onFavorite: (id: number) => void;
  showMoreDetails: (repository: Repository) => void;
}
const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repository,
  onFavorite,
  showMoreDetails,
}) => {
  const { name, owner, full_name, description, id, html_url, marked } = repository;
  return (
    <Card fluid>
      <Card.Content>
        <Image floated="right" size="mini" src={owner.avatar_url} />
        <Card.Header>
          <div>
            <Icon
              bordered
              color={marked ? 'yellow' : 'teal'}
              onClick={() => onFavorite(id)}
              name="star"
            />
            {name}
          </div>
        </Card.Header>

        <Card.Meta>{full_name}</Card.Meta>
        <Link to={{ pathname: html_url }} target="_blank">
          {html_url}
        </Link>
        <Card.Description>{description}</Card.Description>
        <Button
          onClick={() => showMoreDetails(repository)}
          floated="right"
          size="mini"
          content="More"
          icon="tasks"
        />
      </Card.Content>
    </Card>
  );
};

export default RepositoryCard;
