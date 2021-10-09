import { Repository } from 'models/Repository';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

const RepositoryCard: React.FC<
  Pick<Repository, 'name' | 'owner' | 'full_name' | 'description' | 'html_url'>
> = ({ name, owner, full_name, description, html_url }) => (
  <Card fluid>
    <Card.Content>
      <Image floated="right" size="mini" src={owner.avatar_url} />
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{full_name}</Card.Meta>
      <Link to={{ pathname: html_url }} target="_blank">
        {html_url}
      </Link>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);
export default RepositoryCard;
