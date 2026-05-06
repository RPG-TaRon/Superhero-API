function BattleCard({ label, hero, onClear, isWinner }) {
  return (
    <div className={`battle-card ${isWinner ? "winner-card" : ""}`}>
      <h2>{label}</h2>

      {hero ? (
        <>
          <img src={hero.images.md} alt={hero.name} />

          <h3>{hero.name}</h3>

          <div className="stats-list">
            <p>Intelligence: {hero.powerstats.intelligence}</p>
            <p>Strength: {hero.powerstats.strength}</p>
            <p>Speed: {hero.powerstats.speed}</p>
            <p>Durability: {hero.powerstats.durability}</p>
            <p>Power: {hero.powerstats.power}</p>
            <p>Combat: {hero.powerstats.combat}</p>
          </div>

          <button className="clear-btn" onClick={onClear}>
            Clear
          </button>
        </>
      ) : (
        <p className="empty-slot">Choose a fighter</p>
      )}
    </div>
  );
}

export default BattleCard;