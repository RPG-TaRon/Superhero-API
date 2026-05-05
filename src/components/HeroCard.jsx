function HeroCard({ hero, onSelectHero }) {
  return (
    <button className="hero-card" onClick={() => onSelectHero(hero)}>
      <img src={hero.images.sm} alt={hero.name} />

      <h3>{hero.name}</h3>

      <p>{hero.biography.fullName || "Unknown Identity"}</p>
    </button>
  );
}

export default HeroCard;