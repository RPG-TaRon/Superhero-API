function HeroCard({ hero }) {
  return (
    <div className="hero-card">
      <img src={hero.images.sm} alt={hero.name} />

      <h3>{hero.name}</h3>

      <p>{hero.biography.fullName || "Unknown Identity"}</p>
    </div>
  );
}

export default HeroCard;