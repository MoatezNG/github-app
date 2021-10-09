import { Repository } from 'models/Repository';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

interface RepositoryCardProps
  extends Pick<
    Repository,
    'name' | 'owner' | 'full_name' | 'description' | 'html_url' | 'marked' | 'id'
  > {
  onFavorite: (id: number) => void;
}
const RepositoryCard: React.FC<RepositoryCardProps> = ({
  name,
  owner,
  full_name,
  description,
  id,
  html_url,
  marked,
  onFavorite,
}) => (
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
    </Card.Content>
  </Card>
);

export default RepositoryCard;
