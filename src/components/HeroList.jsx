import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({ heroes }) => {
  return (
    <div className="hero-list">
      {heroes.map(hero => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroList;