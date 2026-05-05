import React from 'react';
import BattleCard from '../components/BattleCard';

const Battle = () => {
  const hero1 = {}; // Placeholder
  const hero2 = {}; // Placeholder

  return (
    <div>
      <h1>Battle Page</h1>
      <BattleCard hero={hero1} />
      <BattleCard hero={hero2} />
    </div>
  );
};

export default Battle;