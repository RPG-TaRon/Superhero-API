import React from 'react';

const BattleCard = ({ hero }) => {
  return (
    <div className="battle-card">
      <h3>{hero.name}</h3>
      <p>Power: {hero.power}</p>
    </div>
  );
};

export default BattleCard;