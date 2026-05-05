function HeroCard({ hero, onSelectHero }) {
  return (
    <button className="hero-card" onClick={() => onSelectHero(hero)}>
      <img src={hero.images.sm} alt={hero.name} />

      <div className="hero-card-content">
        <h3>{hero.name}</h3>

        <p>{hero.biography.fullName || "Unknown Identity"}</p>

        <span className="hero-card-tag">
          {hero.biography.publisher || "Unknown Publisher"}
        </span>
      </div>
    </button>
  );
}

export default HeroCard;