import React from 'react';

import RepositoriesList from 'client/containers/RepositoriesList';

const Home: React.FC = () => (
  <div className="App">
    <h1>Repositories</h1>
    <RepositoriesList />
  </div>
);

export default Home;
