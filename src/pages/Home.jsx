import React from 'react';
import HeroList from '../components/HeroList';

const Home = () => {
  const heroes = []; // Placeholder for heroes data

  return (
    <div>
      <h1>Home Page</h1>
      <HeroList heroes={heroes} />
    </div>
  );
};

export default Home;